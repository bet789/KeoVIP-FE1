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
  const [timer, setTimer] = useState(5);
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
  const [timeLeft, setTimeLeft] = useState();
  const timeMatch = Date.parse(data?.timeMatch);
  const timeNow = Date.now();
  const difference = timeMatch - 360000 - timeNow;
  const [loading, setLoading] = useState(true);
  // const difference = +new Date() - +new Date("2022-12-28T18:30:00+05:30");
  const getDataMatchList = async () => {
    const response = await axios.get(`${ip}${urlMatches}`);
    setCategories(response?.data?.data?.categories ?? []);
    setMatchList(response?.data?.data ?? []);
  };
  useEffect(() => {
    getDataMatchList();
    // eslint-disable-next-line
  }, [urlMatches]);
  useEffect(() => {
    if (!Boolean(promotionalVideo) && !Boolean(timer)) {
      getLiveStream();
    }

    // eslint-disable-next-line
  }, [promotionalVideo, timer]);
  useEffect(() => {
    if (pid) {
      getDetailMatchHistory();
      getDetailMatchOdds();
      // getPromotionalVideo();
      getLiveStream(true);
    }
    setLoading(false);
    // eslint-disable-next-line
  }, [pid]);

  useEffect(() => {
    setInterval(() => {
      getLiveStream(false);
    }, 30000);

    // eslint-disable-next-line
  }, [pid]);

  useEffect(() => {
    if (Boolean(promotionalVideo) && playing) {
      if (timer <= 0) {
        clearInterval(timerId.current);
      }

      timerId.current = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1500);
    }

    return () => {
      clearInterval(timerId.current);
    };
  }, [timer, promotionalVideo, playing]);

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

  const getPromotionalVideo = async () => {
    try {
      const res = await axios.get(`${ip}/website/setting/promotional-video`);
      if (res?.data?.data) {
        setPromotionalVideo(res.data.data);
        // setPlaying(true);
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

  const handlePromotionalVideoClick = async (url) => {
    url && window.open(url);
  };

  const handleReady = async () => {
    setTimeout(() => {
      setPlaying(true);
    }, 1000);
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
  const calculateTimeLeft = () => {
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
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
    setLinkLivestream("https://keovip.b-cdn.net/worldCup_2022.812323cc77452e7fc8171c31b25aad69.mp4");
  };
  // console.log(data);
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
              <Marquee />
              {/* <div className="banner">
              <Banner />
            </div> */}
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
                              <a target="_blank" href="https://www.789betb.com/?uagt=livesbong1&path=signup">
                                789BET
                              </a>
                              <a target="_blank" href="https://www.new88ww.com/?uagt=livesbong1&path=signup">
                                NEW88
                              </a>
                              <a target="_blank" href="https://www.jun88h.com/?uagt=livesbong1&path=signup">
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
                  <iframe
                    width="100%"
                    height="670"
                    src="https://a2zchat.com/embed/6348e17da24d2aea95abb068"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
              {/* {data?.linkRoomChat !== "undefined" ? (
                  <div
                    style={{ position: "relative", height: "720px" }}
                    dangerouslySetInnerHTML={{ __html: data?.linkRoomChat }}
                  />
                ) : (
                  <iframe
                    src="https://www5.cbox.ws/box/?boxid=936674&boxtag=VyUjzQ"
                    width="100%"
                    height="720px"
                    allowtransparency="yes"
                    allow="autoplay"
                    frameBorder="0"
                    marginHeight="0"
                    marginWith="0"
                    scrolling="auto"
                  />
                )} */}

              {/* <iframe
                  width="100%"
                  height="100%"
                  src="https://a2zchat.com/embed/6350ecf631e16ee5703546d9"
                  frameborder="0"
                ></iframe> */}
              {/* livestream video */}
              {/* {!Boolean(promotionalVideo) && (
                <div className="row">
                  <div className="col-12 col-lg-12"></div>
                </div>
              )} */}
            </div>
          </div>
        </div>
        {/* <MatchDetailsContext.Provider value={{ dataDetailMatchHistory }}>
          <TopBet />
          <RecentResult />
        </MatchDetailsContext.Provider>
        
        <Introduction /> */}
        <div className="app-live">
          <div className="container">
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
