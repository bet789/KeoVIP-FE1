import React, { useState, useEffect } from "react";
import Headhtml from "../containers/Headhtml";
import Script from "../containers/Script";
import { Footer } from "../containers/Footer";
import { Header } from "../containers/Header";
import { Introduction } from "../containers/Introduction";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { ip } from "../data/ip";
import moment from "moment";
import InfiniteScroll from "../containers/infiniteScroll";
import { Banner } from "../containers/Banner";
import SkSchedule from "../containers/Skeleton/SkSchedule";

export async function getServerSideProps() {
  const response = await axios.get(`${ip}/website/schedule`);
  const tmp = response?.data?.data ?? [];
  const dataToday = tmp?.filter((item) => item.value === "")?.[0] ?? undefined;
  let tmpData = tmp?.filter((item) => item.value !== "") ?? [];
  tmpData.sort((a, b) => {
    return moment(new Date(a.value)).isBefore(moment(new Date(b.value))) ? -1 : 1;
  });
  if (dataToday) tmpData.splice(0, 0, dataToday);
  // Pass data to the page via props
  return { props: { data: tmpData } };
}

export default function Schedulepage({ data }) {
  const [date, setDate] = useState(data?.[0]?.value ?? "");
  const [selectedLeague, setSelectedLeague] = useState("lich-truc-tiep");
  const [blv, setBlv] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDataSchedulesByDate = async () => {
    const response = await axios.get(`${ip}/website/schedule/${date}`);
    const tmp = response?.data?.data ?? [];
    let res = [];
    tmp.map((item) => {
      let flag = -1;
      res.map((e, index) => {
        if (e?.leagueId === item?.leagueId) {
          flag = index;
        }
      });
      if (flag !== -1) res[flag].data = res[flag]?.data.concat(item);
      else {
        res = res.concat({
          leagueId: item?.leagueId,
          data: [item],
          name: item?.leagueName,
        });
      }
    });
    setSchedules(res);
  };

  const getDataBLV = async () => {
    const response = await axios.get(`${ip}/website/matches?type=blv`);
    setBlv(response?.data?.data ?? []);
    setLoading(false);
  };

  const getDataLeague = async () => {
    const response = await axios.get(`${ip}/website/schedule/league`);
    setLeagues(response?.data?.data ?? []);
  };

  useEffect(() => {
    getDataLeague();
    getDataBLV();
  }, []);

  useEffect(() => {
    getDataSchedulesByDate();
  }, [date]);
  return (
    <div className={styles.container}>
      <Headhtml />
      <main className={styles.main}>
        <Header />
        <div id="schedulepage">
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <h3 className="page-title mt-4">CẬP NHẬT LỊCH THI ĐẤU BÓNG ĐÁ HÔM NAY MỚI NHẤT 24H</h3>
            <div className="select-date-league">
              <ul>
                {data?.map((item, index) => (
                  <li
                    key={index}
                    className={`select-date-item ${item.value === date ? "active" : ""}`}
                    onClick={() => {
                      setDate(item.value);
                      setSelectedLeague("");
                    }}
                  >
                    <div>{item.value === "" ? "Hôm nay" : item?.name}</div>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="league_container">
              <div className="select-league">
                <p
                  className={selectedLeague === "lich-truc-tiep" ? "active" : ""}
                  onClick={() => setSelectedLeague("lich-truc-tiep")}
                >
                  Lịch trực tiếp BLV
                </p>
                <p className={selectedLeague === "" ? "active" : ""} onClick={() => setSelectedLeague("")}>
                  Tất cả
                </p>
                {leagues.map((item) => (
                  <p
                    key={item.id}
                    onClick={() => setSelectedLeague(item?.id)}
                    className={selectedLeague === item?.id ? "active" : ""}
                  >
                    <img
                      src={item?.flag ?? "https://xoilac3.net/Image/league_match/images/20200709144320.png?win007=sell"}
                      alt=""
                    />
                    {item?.name ?? ""}
                  </p>
                ))}
              </div>
              <InfiniteScroll
                key={date}
                data={
                  selectedLeague === "" ? schedules ?? [] : schedules.filter((e) => +e.leagueId === +selectedLeague)
                }
                limitInit={500}
                render={(x, index) => {
                  const L = leagues.filter((l) => {
                    return +l.id === +x.leagueId;
                  });
                  return (
                    <li key={index} className="league-item">
                      <div className="league-title">
                        {L[0] ? <img src={L[0]?.flag} alt="" /> : ""}
                        <span>{x?.name ?? "leauge"}</span>
                      </div>
                      <ul className="match-list">
                        {x.data.map((e) => (
                          <li key={e.id}>
                            <div className="match-time">{e?.time}</div>
                            <div className="match-team">
                              <div>
                                <span className="team-name">{e?.team_home_name}</span>
                                <picture>
                                  <img
                                    src={
                                      e?.team_home_logo ??
                                      "https://xoilac7.net/Image/team/images/20130921172915.gif?win007=sell"
                                    }
                                    alt={e?.team_home_name}
                                  />
                                </picture>
                              </div>
                              <div>
                                <span className="vs">
                                  {/* {e?.score?.home ?? 0} - {e?.score?.away ?? 0} */}
                                  vs
                                </span>
                              </div>
                              <div>
                                <picture>
                                  <img
                                    src={
                                      e?.team_away_logo ??
                                      "https://xoilac7.net/Image/team/images/20130921172933.gif?win007=sell"
                                    }
                                    alt={e?.team_away_name}
                                  />
                                </picture>
                                <span className="team-name">{e?.team_away_name}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }}
              />
              <div className="schedule-blv">
                {loading ? (
                  <SkSchedule />
                ) : selectedLeague === "lich-truc-tiep" ? (
                  blv.map((data, index) => {
                    return (
                      <li key={index} className="league-item">
                        <div className="league-title">
                          <span>{data.league}</span>
                        </div>
                        <ul className="match-list">
                          <li key={data.id}>
                            <div className="match-time">{data?.time}</div>
                            <div className="match-blv">
                              BLV {data?.commentator} <span>Live</span>
                            </div>
                            <div className="match-team">
                              <div>
                                <span className="team-name">{data?.team_home_name}</span>
                                <picture>
                                  <img
                                    src={
                                      data?.team_home_logo ??
                                      "https://xoilac7.net/Image/team/images/20130921172915.gif?win007=sell"
                                    }
                                    alt={data?.team_home_name}
                                  />
                                </picture>
                              </div>
                              <div>
                                <span className="vs">
                                  {/* {e?.score?.home ?? 0} - {e?.score?.away ?? 0} */}
                                  vs
                                </span>
                              </div>
                              <div>
                                <picture>
                                  <img
                                    src={
                                      data?.team_away_logo ??
                                      "https://xoilac7.net/Image/team/images/20130921172933.gif?win007=sell"
                                    }
                                    alt={data?.team_away_name}
                                  />
                                </picture>
                                <span className="team-name">{data?.team_away_name}</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    );
                  })
                ) : (
                  ""
                )}
              </div>
            </ul>
            <p className="intro">
              Mỗi ngày trên thế giới diễn ra hàng trăm trận đấu ở rất nhiều giải bóng đá khác nhau. Để biết chính xác
              thời gian thi đấu của những trận đấu hàng đầu. Bạn nên truy cập vào KEOVIP.TV, bởi chúng tôi hiện tại đang
              là website cập nhật lịch thi đấu bóng đá trực tuyến hàng đầu Việt Nam. Giúp bạn có thể biết được chính xác
              lịch bóng đá của bất kỳ trận đấu nào với đầy đủ thông tin nhất
            </p>
            <br />
          </div>
        </div>
        {/* <Introduction/> */}
        <Footer />
      </main>
      <Script />
    </div>
  );
}
