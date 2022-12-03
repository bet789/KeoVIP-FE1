import React, {useEffect, useState} from 'react';
import Headhtml from '../containers/Headhtml';
import Script from '../containers/Script';
import {Footer} from '../containers/Footer';
import {Header} from '../containers/Header';
import {Introduction} from '../containers/Introduction';
import styles from '../styles/Home.module.css';
// import axios from "../utility/axios";
import axios from 'axios';
import {ip} from '../data/ip';
import moment from 'moment';
import Image from 'next/image';
import InfiniteScroll from '../containers/infiniteScroll';
import {Banner} from '../containers/Banner';
import SearchIcon from '@mui/icons-material/Search';

// export async function getServerSideProps() {
//   const response = await axios.get(`${ip}/website/result`);
//   const tmp = response?.data?.data ?? [];
//   const dataToday = tmp?.filter((item) => item.value === '')?.[0] ?? undefined;
//   let tmpData = tmp?.filter((item) => item.value !== '') ?? [];
//   tmpData.sort((a, b) => {
//     return moment(new Date(a.value)).isAfter(moment(new Date(b.value))) ? 1 : -1;
//   });
//   if (dataToday) tmpData = tmpData.concat(dataToday);
//   // Pass data to the page via props
//   return { props: { data: tmpData } };
// }

export default function Resultpage({data}) {
  const [listDate, setListDate] = useState([]);
  const [date, setDate] = useState(data?.[0]?.value ?? '');
  const [nameTeamSearch, setNameTeamSearch] = useState(undefined);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [leagues, setLeagues] = useState([]);
  const [results, setResults] = useState([]);

  const getDataResultByDate = async () => {
    const response = await axios.get(`${ip}/website/result/${date}`);
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
        });
      }
    });
    setResults(res);
  };

  useEffect(() => {
    getDataResultByDate();
  }, [date]);

  const getDataLeague = async () => {
    const response = await axios.get(`${ip}/website/result/league`);
    setLeagues(response?.data?.data ?? []);
    const res = await axios.get(`${ip}/website/result/menu`);
    let tmp = res?.data?.data ?? [];
    setDate(tmp?.[0]?.value ?? '');
    tmp.reverse();
    setListDate(tmp);
  };

  useEffect(() => {
    getDataLeague();
  }, []);
  let dataFinal =
    selectedLeague === ''
      ? results ?? []
      : results.filter((e) => parseInt(e?.leagueId) === selectedLeague);
  if (nameTeamSearch !== undefined) {
    dataFinal = dataFinal.map((e) => {
      let tmp = {
        ...e,
        data: e.data.filter(
          (item) =>
            item?.team_home_name?.search(nameTeamSearch) !== -1 ||
            item?.team_away_name?.search(nameTeamSearch) !== -1
        ),
      };
      return tmp;
    });
    dataFinal = dataFinal.filter((e) => e.data.length > 0);
  }

  return (
    <div className={styles.container}>
      <Headhtml/>
      <main className={styles.main}>
        <Header/>
        <div id="result-page">
          <div className="container" id="ket-qua">
            <div className="banner">
              <Banner/>
            </div>
            <h3 className="page-title mt-4">KẾT QUẢ BÓNG ĐÁ MỚI NHẤT - KQBD HÔM NAY</h3>
            <div className="select-date-league">
              <ul>
                {listDate?.map((item, index) => (
                  <li
                    key={index}
                    className={`select-date-item ${item.value === date ? 'active' : ''}`}
                    onClick={() => {
                      setDate(item.value);
                      setSelectedLeague('');
                    }}
                  >
                    <div>{item?.name}</div>
                  </li>
                ))}
              </ul>
              <div>
                <SearchIcon/>
                <input
                  placeholder="Tìm kiếm đội bóng"
                  onChange={(e) => {
                    setNameTeamSearch(e.target.value);
                  }}
                  style={{width: 300}}
                />
              </div>
            </div>
            <ul className="league_container">
              {/* {data
                ?.filter((item) => item.value === date)?.[0]
                ?.data?.map((item, index) => (
                  <></>
                ))} */}
              <div className="select-league">
                <p
                  className={selectedLeague === '' ? 'active' : ''}
                  onClick={() => setSelectedLeague('')}
                >
                  Tất cả
                </p>
                {leagues.map((item) => (
                  <p
                    key={item.id}
                    onClick={() => setSelectedLeague(item?.id)}
                    className={selectedLeague === item?.id ? 'active' : ''}
                  >
                    <img
                      src={
                        item?.flag ??
                        'https://xoilac3.net/Image/league_match/images/20200709144320.png?win007=sell'
                      }
                      alt=""
                    />
                    {item?.name ?? ''}
                  </p>
                ))}
              </div>
              <li className="league-item">
                <ul className="match-list">
                  <li>
                    <div className="match-time">
                      <b>Thời gian</b>
                    </div>
                    <div className="match-team">
                      <span
                        className="team-name"
                        style={{textAlign: 'center', fontWeight: 'bold'}}
                      >
                        Đội chủ nhà
                      </span>
                      <span
                        className="vs"
                        style={{
                          backgroundColor: 'transparent',
                          textAlign: 'left',
                          padding: 0,
                          margin: 0,
                          paddingLeft: '4%',
                        }}
                      >
                        Tỉ số
                      </span>
                      <span
                        className="team-name"
                        style={{textAlign: 'center', fontWeight: 'bold'}}
                      >
                        Đội khách
                      </span>
                    </div>
                    <span
                      className="vs"
                      style={{
                        margin: 0,
                        lineHeight: '32px',
                        backgroundColor: 'transparent',
                      }}
                    >
                      Hiệu số
                    </span>
                  </li>
                </ul>
              </li>
              <InfiniteScroll
                key={date}
                data={dataFinal}
                limitInit={100000}
                render={(x, index) => {
                  const league = leagues?.filter((item) => item.id === parseInt(x.leagueId))?.[0];
                  if (!league) return <></>;
                  return (
                    <li key={index} className="league-item">
                      <div className="league-title">
                        {league && (
                          <img
                            src={
                              league?.flag ??
                              'https://xoilac3.net/Image/league_match/images/20200709144320.png?win007=sell'
                            }
                            alt=""
                          />
                        )}
                        {league && <span>{league?.name ?? 'leauge'}</span>}
                      </div>
                      <ul className="match-list">
                        {x?.data?.map((e) => (
                          <li key={e.id}>
                            <div className="match-time">{e.time}</div>
                            <div className="match-team">
                              <span className="team-name">{e?.team_home_name}</span>
                              <img
                                src={
                                  e?.team_home_logo
                                }
                                width={30}
                                height={30}
                                alt=""
                              />
                              <span className="vs">{e?.result}</span>
                              <img
                                src={
                                  e?.team_away_logo
                                }
                                width={30}
                                height={30}
                                alt=""
                              />
                              <span className="team-name">{e?.team_away_name}</span>
                            </div>
                            <span className="vs" style={{margin: 0, lineHeight: '32px'}}>
                              {e?.competition}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }}
              />
            </ul>
            <p className="intro">
              Tại Kèo VIP có rất nhiều chức năng hay cho mọi người sử dụng. Trong đó một trong những
              chuyên mục được đánh giá cao nhất đó là Kết Quả Bóng Đá. Bởi chúng tôi muốn mọi người
              có thể biết được kết quả bất kỳ trận đấu nào nhanh, chính xác và đầy đủ thông tin
              nhất. Tại <b>Xoi Lac TV</b>, bạn có thể xem <b>KQBD</b> Ngoại Hạng Anh, Cúp C1, La
              Liga, Serie A,.. cho đến các giải đấu nhỏ khác.
            </p>
          </div>
        </div>
        <Introduction/>
        <Footer/>
      </main>

      <Script/>
    </div>
  );
}
