import React, { useState, useEffect, useRef } from "react";
import Headhtml from "../../containers/Headhtml";
import Script from "../../containers/Script";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../containers/Footer";
import { Header } from "../../containers/Header";
import { Introduction } from "../../containers/Introduction";
import { useRouter } from "next/router";
import axios from "axios";
import { ip } from "../../data/ip";
import { urlAmination } from "../../data/ip";
import ReactPlayer from "react-player";
import { TopBet } from "../../containers/TopBet";
import { RecentResult } from "../../containers/RecentResult";
import { Banner } from "../../containers/Banner";
import HotLive from "../../containers/HotLive";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import MatchContinue from "../../containers/MatchContinue";
import { Autoplay } from "swiper";
import { Button } from "@mui/material";
import ReactJWPlayer from "react-jw-player";
import Marquee from "../../containers/Marquee";
import EventStat from "../../containers/EventStat";
import SkLivetream from "../../containers/Skeleton/SkLivetream";
import CountDown from "../../containers/CountDown";
import Ads from "../../containers/Ads";
import {
  ADS_BANNER_BOTTOM,
  ADS_KEOVIP,
  URL_789BET,
  URL_API_THESPORTS,
  URL_IFRAME_CHAT,
  URL_IFRAME_THESPORTS,
  URL_JUN88,
  URL_NEW88,
  URL_VIDEO,
} from "../../contants";
import reverseString from "../../utility/reverseString";
import { useMemo } from "react";
const listDetailMatchOddsOptions = ["789Bet", "New88", "Jun88"];

export const MatchDetailsContext = React.createContext();

export default function MatchDetails() {
  const router = useRouter();
  const { pid } = router.query;
  const arr = pid?.split("-") ?? [];
  const id = arr.length > 1 ? arr[arr.length - 1] : "";
  const [livestream, setLivestream] = useState([]);
  const [linkLivestream, setLinkLivestream] = useState("");
  const [data, setData] = useState(undefined);
  const [promotionalVideo, setPromotionalVideo] = useState(null);
  const timerId = useRef();
  const [dataDetailMatchOdds, setDataDetailMatchOdds] = useState([]);
  const [dataDetailMatchOddsOptions, setDataDetailMatchOddsOptions] = useState(0);
  const [dataDetailMatchHistory, setDataDetailMatchHistory] = useState([]);
  const [playing, setPlaying] = useState(false);
  const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const [matchList, setMatchList] = useState([]);
  const [limit, setLimit] = useState(12);
  const [urlMatches, setUrlMatches] = useState("/website/matches?type=home");
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const timeMatch = Date.parse(data?.timeMatch);
  const timeNow = Date.now();
  const difference = timeMatch - 360000 - timeNow;
  const [loading, setLoading] = useState(true);
  const [dataTheSports, setDataTheSports] = useState(null);
  const [dataTheSportsLive, setDataTheSportsLive] = useState(null);
  const matchIdLive = useMemo(() => {
    return dataTheSportsLive?.filter((data) => dataTheSports?.thesports_uuid === data.match_id);
  }, [dataTheSports?.thesports_uuid]);
  const getDataMatchList = async () => {
    const response = await axios.get(`${ip}${urlMatches}`);
    setCategories(response?.data?.data?.categories ?? []);
    setMatchList(response?.data?.data ?? []);
  };
  useEffect(() => {
    getDataMatchList();
  }, [urlMatches]);
  // useEffect(() => {
  //   if (!Boolean(promotionalVideo) && !Boolean(timer)) {
  //     getLiveStream();
  //   }
  // }, [promotionalVideo, timer]);
  useEffect(() => {
    if (pid) {
      getDetailMatchHistory();
      getDetailMatchOdds();
      // getPromotionalVideo();
      getLiveStream(true);
      getDataTheSports();
      getDataTheSportsLive();
    }
    setLoading(false);
  }, [pid]);

  useEffect(() => {
    setInterval(() => {
      getLiveStream(false);
    }, 30000);
  }, [pid]);

  // useEffect(() => {
  //   if (Boolean(promotionalVideo) && playing) {
  //     if (timer <= 0) {
  //       clearInterval(timerId.current);
  //     }

  //     timerId.current = setInterval(() => {
  //       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
  //     }, 1500);
  //   }

  //   return () => {
  //     clearInterval(timerId.current);
  //   };
  // }, [timer, promotionalVideo, playing]);
  const matchID = reverseString(id.toString().slice(1, 8));
  const getDataTheSports = async () => {
    try {
      const res = await axios.get(URL_API_THESPORTS);
      if (res?.data?.data) {
        const dt = res.data.data;
        dt.map((item) => {
          if (item.match_id == matchID) {
            setDataTheSports(item);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getDataTheSportsLive = async () => {
    try {
      const res = await axios.get(`${URL_API_THESPORTS}/live`);
      if (res?.data?.data) {
        setDataTheSportsLive(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getDetailMatchHistory = async () => {
    try {
      const res = await axios.get(`${ip}/website/matches/${id}/history`);
      if (res?.data?.data) {
        setDataDetailMatchHistory(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getDetailMatchOdds = async () => {
    try {
      const res = await axios.get(`${ip}/website/matches/${id}/odds`);
      if (res?.data?.data) {
        setDataDetailMatchOdds(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getLiveStream = async (isLiveStream) => {
    if (id) {
      const response = await axios.get(`${ip}/website/matches/${id}`);
      setData(response?.data?.data ?? undefined);
      isLiveStream && setLivestream(response?.data?.data?.livestream ?? []);
      isLiveStream && setLinkLivestream((response?.data?.data?.livestream ?? [])?.[0]?.link ?? "");
    }
  };
  const buttonChat = [
    {
      title: "Tỷ lệ kèo",
      url: "/ty-le-keo",
    },
    {
      title: "Livescore",
      url: "/livescore",
    },
    {
      title: "Nhóm Keovip",
      url: "https://t.me/keovip39",
    },
    {
      title: "Đặt cược",
      url: "https://www.7897890.vip/signup",
    },
  ];
  const handleRefresh = (e) => {
    e.preventDefault();
    router.reload(window.location.pathname);
  };
  const onEnterFullScreen = () => {
    const myElement = `  <div class="button-odd2" >
    <a target="_blank" href="https://www.789betb.com/?uagt=livesbong1&path=signup">
      789BET
    </a>
    <a target="_blank" href="https://www.new88ww.com/?uagt=livesbong1&path=signup">
      NEW88
    </a>
    <a target="_blank" href="https://www.jun88h.com/?uagt=livesbong1&path=signup">
      Jun88
    </a>
  </div>`;
    // refButton.current.insertAdjacentHTML("beforeend", myElement);
    document.getElementById("livePlayer").insertAdjacentHTML("beforeend", myElement);
  };
  const handleError = (e) => {
    setLinkLivestream(URL_VIDEO);
  };
  return (
    <div className={styles.container}>
      <Headhtml />
      <main id="main" className={styles.main}>
        <div id="detailPage">
          <Header />
          <picture>
            <img
              src="https://senbackkg.kz4702q.com/main-consumer-web/assets-oss/commons/images/worldCupLanding/banner_loaded.2e26c37489fb845f412c90b2056be180.webp"
              className="bg_homepage"
              alt="bg_homepage"
            />
          </picture>
          <div className="match-details">
            <div className="home-live">
              <a href={ADS_KEOVIP} target="_blank">
                <div className="ads-mobile" style={{ display: "none" }}>
                  <img src={ADS_BANNER_BOTTOM} width="100%" height="70px" />
                </div>
              </a>
              <Marquee />
              <div className="match-details-live">
                <div className="match-live" styles={{ position: "relative", marginBottom: 10 }}>
                  {
                    <>
                      {loading ? (
                        <SkLivetream />
                      ) : livestream?.length > 0 ? (
                        <>
                          <div>
                            <ReactJWPlayer
                              playerId="livePlayer"
                              playerScript="https://cdn.jwplayer.com/libraries/m393TMt7.js"
                              file={linkLivestream}
                              onSeventyFivePercent={() => console.log("75 Percent")}
                              onNinetyFivePercent={() => console.log("95 Percent")}
                              onOneHundredPercent={() => console.log("100 Percent")}
                              isAutoPlay={true}
                              aspectRatio="16:9"
                              onEnterFullScreen={() => onEnterFullScreen()}
                              customProps={{
                                playbackRateControls: [1, 1.25, 1.5],
                                cast: {},
                              }}
                              onError={(e) => handleError(e)}
                            />
                            <div className="button-odd">
                              <a target="_blank" href={URL_789BET}>
                                789BET
                              </a>
                              <a target="_blank" href={URL_NEW88}>
                                NEW88
                              </a>
                              <a target="_blank" href={URL_JUN88}>
                                Jun88
                              </a>
                            </div>
                          </div>

                          <div
                            className="pagination"
                            style={{
                              display: "flex",
                              marginBottom: 10,
                              justifyContent: "left",
                              padding: "5px",
                              background: "#a9a0a0ba",
                            }}
                          >
                            {livestream.map((item, i) => (
                              <span
                                key={i}
                                className="live"
                                style={{ background: `${item?.color ?? "#F0BE5A"}` }}
                                onClick={() => {
                                  setLinkLivestream(item?.link ?? "");
                                  //test
                                  // setLinkLivestream(
                                  //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                                  // );
                                }}
                              >
                                {item?.name ?? `Dự phòng ${i + 1}`}
                              </span>
                            ))}
                          </div>
                        </>
                      ) : matchIdLive?.length > 0 ? (
                        <iframe
                          src={`${URL_IFRAME_THESPORTS}&uuid=${matchIdLive[0].match_id}`}
                          width="100%"
                          height="720"
                        ></iframe>
                      ) : (
                        <iframe
                          src={`${urlAmination}?matchId=${id}&accessKey=tEFL6ClbFnfkvmEn0xspIVQyPV9jAz9u&lang=vi&statsPanel=hide`}
                          width="100%"
                          height="720"
                        ></iframe>
                      )}
                    </>
                  }
                </div>
                <div className="match-live-chat">
                  <div className="pagination" style={{ display: "flex", marginBottom: 10 }}>
                    {buttonChat.map((item, i) => (
                      <span
                        key={i}
                        className="live"
                        style={{ width: "25%" }}
                        onClick={() => {
                          Boolean(item?.url) && window.open(item?.url);
                        }}
                      >
                        {item?.title ?? ""}
                      </span>
                    ))}
                  </div>
                  <iframe width="100%" height="670" src={URL_IFRAME_CHAT} frameBorder="0"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-live">
          <div className="container">
            <Ads />
            <CountDown timer={1800} />
            <div className="match-details-odds">
              <div className="match-introduction">
                <div className="match-team">
                  <picture>
                    <img src={data?.team_home_logo ?? ""} alt="" />
                  </picture>
                  <div className="team-name">
                    <a>{data?.team_home_name ?? ""}</a>
                  </div>
                </div>
                <div className="match-center">
                  <div className="match-result">
                    {data?.score?.home ?? 0} - {data?.score?.away ?? 0}
                  </div>
                  <div className="match-status">{data?.time}</div>
                  <div className="match-odds flex-column">
                    <div className="company">
                      {listDetailMatchOddsOptions.map((item, idx) => (
                        <span
                          key={idx}
                          className={dataDetailMatchOddsOptions === idx ? "active" : ""}
                          onClick={() => setDataDetailMatchOddsOptions(idx)}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="show-odds">
                      <div className="soccer">
                        {dataDetailMatchOdds[dataDetailMatchOddsOptions]?.map((item, idx) => {
                          return (
                            <div key={idx} className="item">
                              <div className="side">
                                {item.left.map((d, index) => (
                                  <span key={index}>{d}</span>
                                ))}
                              </div>
                              <div className="mid">{item.center}</div>
                              <div className="side">
                                {item.right.map((d, index) => (
                                  <span key={index}>{d}</span>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="match-team">
                  <picture>
                    <img src={data?.team_away_logo ?? ""} alt="" />
                  </picture>
                  <div className="team-name">
                    <a>{data?.team_away_name ?? ""}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="match-amination">
              <iframe
                src={`${urlAmination}?matchId=${id}&accessKey=tEFL6ClbFnfkvmEn0xspIVQyPV9jAz9u&lang=vi`}
                width="800"
                height="700"
              ></iframe>
              <div className="match-stats">
                <h3>Sự Kiện Chính</h3>
                <EventStat id={id} />
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12 mb-3">
                <div className="news-selector">
                  <ul>
                    <span>
                      <img src="/assets/images/Group-19.png" />
                    </span>
                    <li>
                      <span>TRẬN ĐẤU TIẾP THEO</span>
                    </li>
                  </ul>
                </div>
                <Swiper
                  slidesPerView={4}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                    // when window width is <= 420px
                    375: {
                      slidesPerView: 1,
                    },
                    360: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1080: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {matchList &&
                    matchList.length > 0 &&
                    matchList
                      .filter((item, index) => page <= index + 1 && index + 1 <= page + limit - 1)
                      .map((item) => {
                        return (
                          <SwiperSlide key={item._id}>
                            <MatchContinue data={item} />
                          </SwiperSlide>
                        );
                      })}
                </Swiper>
              </div>
            </div> */}
            <HotLive />
          </div>
        </div>
        <Footer />
      </main>
      <Script />
    </div>
  );
}
