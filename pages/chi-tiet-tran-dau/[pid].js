import React, { useState, useEffect, useRef } from "react";
import Headhtml from "../../containers/Headhtml";
import Script from "../../containers/Script";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../containers/Footer";
import { Header } from "../../containers/Header";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import ReactJWPlayer from "react-jw-player";
import Marquee from "../../containers/Marquee";
import EventStat from "../../containers/EventStat";

import {
  URL_789BET,
  URL_IFRAME_CHAT,
  URL_IFRAME_THESPORTS,
  URL_JUN88,
  URL_NEW88,
  URL_VIDEO,
  URL_GROUP_KEOVIP,
  URL_IMAGE_BACKGROUND,
  URL_AMINATION,
} from "../../contants";
import { useMemo } from "react";
import {
  getApiMatchDetail,
  getApiMatchList,
  getApiMatchOdds,
  getApiTheSports,
  getApiTheSportsLive,
} from "../api";

import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
const listDetailMatchOddsOptions = ["789BET", "NEW88", "Jun88"];

export const MatchDetailsContext = React.createContext();

export default function MatchDetails({
  matchDetail,
  matchTheSports,
  matchTheSportsLive,
  matchOdds,
}) {
  const router = useRouter();
  const pid = router.query.pid;
  const [dataDetailMatchOddsOptions, setDataDetailMatchOddsOptions] =
    useState(0);
  const matches = useMediaQuery("(max-width:768px)");
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (matches) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [matches]);

  const matchIdTheSports = useMemo(() => {
    return matchTheSports.filter((data) => data?.match_id == matchDetail?.id);
  }, [matchDetail?.id, matches]);

  const matchIdLive = useMemo(() => {
    return matchTheSportsLive?.filter(
      (data) => matchIdTheSports[0]?.thesports_uuid === data?.match_id
    );
  }, [matchIdTheSports[0]?.thesports_uuid, matches]);

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
      url: URL_GROUP_KEOVIP,
    },
    {
      title: "Đặt cược",
      url: URL_789BET,
    },
  ];

  const onEnterFullScreen = () => {
    const myElement = `  <div class="button-odd2" >
    <a target="_blank" href="${URL_789BET}">
      789BET
    </a>
    <a target="_blank" href="${URL_NEW88}">
      NEW88
    </a>
    <a target="_blank" href="${URL_JUN88}">
      Jun88
    </a>
  </div>`;
    // refButton.current.insertAdjacentHTML("beforeend", myElement);
    document
      .getElementById("livePlayer")
      .insertAdjacentHTML("beforeend", myElement);
  };

  const handleError = (e) => {
    setLinkLivestream(URL_VIDEO);
  };

  const [chromeHeight, setChromeHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight - 330 : 0
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setChromeHeight(window.innerHeight - 330);
    });
  }, [typeof window !== "undefined" && window]);

  return (
    <div className={`${styles.container} match-detail-mobile`}>
      <Headhtml />
      <main id="main" className={styles.main}>
        <div id="detailPage">
          <Header />
          <picture>
            <img
              src={URL_IMAGE_BACKGROUND}
              className="bg_homepage"
              alt="bg_homepage"
            />
          </picture>
          <div className="match-details">
            <div className="home-live">
              {/* <a href={ADS_KEOVIP} target="_blank">
                <div className="ads-mobile" style={{ display: "none" }}>
                  <img src={ADS_BANNER_BOTTOM} width="100%" height="70px" />
                </div>
              </a> */}
              <Marquee />
              <div className="match-details-live">
                <div className="match-live" style={{ position: "relative" }}>
                  {
                    <>
                      {matchDetail?.livestream?.length > 0 ? (
                        <div>
                          <ReactJWPlayer
                            playerId="livePlayer"
                            playerScript="https://cdn.jwplayer.com/libraries/m393TMt7.js"
                            file={matchDetail?.livestream?.[0]?.link}
                            onSeventyFivePercent={() =>
                              console.log("75 Percent")
                            }
                            onNinetyFivePercent={() =>
                              console.log("95 Percent")
                            }
                            onOneHundredPercent={() =>
                              console.log("100 Percent")
                            }
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
                      ) : matchIdLive?.length > 0 ? (
                        <>
                          <iframe
                            src={`${URL_IFRAME_THESPORTS}&uuid=${matchIdLive[0].match_id}`}
                            width="100%"
                            height="670"
                          ></iframe>
                          <div className="button-odd">
                            <a target="_blank" href={URL_789BET}>
                              789BET
                            </a>
                            <a target="_blank" href={URL_NEW88}>
                              NEW88
                            </a>
                            <a target="_blank" href={URL_JUN88}>
                              Jun8
                            </a>
                          </div>
                        </>
                      ) : (
                        <iframe
                          src={`${URL_AMINATION}?matchId=${matchDetail.id}&accessKey=tEFL6ClbFnfkvmEn0xspIVQyPV9jAz9u&lang=vi&statsPanel=hide`}
                          width="100%"
                          height="700"
                        ></iframe>
                      )}
                    </>
                  }
                </div>
                {matches && (
                  <Box
                    className="box-chat-details"
                    style={{ height: chromeHeight - 2 + "px" }}
                  >
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList onChange={handleChange} aria-label="tabs">
                          <Tab
                            label="PHÒNG CHAT"
                            value="1"
                            style={{ padding: "5px 10px" }}
                          />
                          <Tab
                            label="SỰ KIỆN CHÍNH"
                            value="2"
                            style={{ padding: "5px 10px" }}
                          />
                        </TabList>
                      </Box>
                      <TabPanel
                        value="1"
                        style={{ padding: 0 }}
                        className="tabs-panel"
                      >
                        <div
                          className="match-live-chat"
                          style={{
                            backgroundColor: "#fff",
                            overflow: "hidden",
                          }}
                        >
                          <iframe
                            width="100%"
                            height="100%"
                            src={URL_IFRAME_CHAT}
                            frameBorder="0"
                          ></iframe>
                        </div>
                      </TabPanel>
                      <TabPanel
                        value="2"
                        className="tabs-panel"
                        style={{
                          padding: "0px 10px 40px",
                          backgroundColor: "#fff",
                          overflow: "scroll",
                        }}
                      >
                        <div className="app-live">
                          <div className="container">
                            <div className="match-details-odds">
                              <div className="match-introduction">
                                <div className="match-team">
                                  <picture>
                                    <img
                                      src={matchDetail?.team_home_logo ?? ""}
                                      alt=""
                                    />
                                  </picture>
                                  <div className="team-name">
                                    <a>{matchDetail?.team_home_name ?? ""}</a>
                                  </div>
                                </div>
                                <div className="match-center">
                                  <div className="match-result">
                                    {matchDetail?.score?.home ?? 0} -{" "}
                                    {matchDetail?.score?.away ?? 0}
                                  </div>
                                  <div className="match-status">
                                    {matchDetail?.time}
                                  </div>
                                  <div className="match-odds flex-column">
                                    <div className="company">
                                      {listDetailMatchOddsOptions.map(
                                        (item, idx) => (
                                          <span
                                            key={idx}
                                            className={
                                              dataDetailMatchOddsOptions === idx
                                                ? "active"
                                                : ""
                                            }
                                            onClick={() =>
                                              setDataDetailMatchOddsOptions(idx)
                                            }
                                          >
                                            {item}
                                          </span>
                                        )
                                      )}
                                    </div>
                                    <div className="show-odds">
                                      <div className="soccer">
                                        {matchOdds[
                                          dataDetailMatchOddsOptions
                                        ]?.map((item, idx) => {
                                          return (
                                            <div key={idx} className="item">
                                              <div className="side">
                                                {item.left.map((d, index) => (
                                                  <span key={index}>{d}</span>
                                                ))}
                                              </div>
                                              <div className="mid">
                                                {item.center}
                                              </div>
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
                                    <img
                                      src={matchDetail?.team_away_logo ?? ""}
                                      alt=""
                                    />
                                  </picture>
                                  <div className="team-name">
                                    <a>{matchDetail?.team_away_name ?? ""}</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="match-amination">
                              <iframe
                                src={`${URL_AMINATION}?matchId=${pid}&accessKey=tEFL6ClbFnfkvmEn0xspIVQyPV9jAz9u&lang=vi`}
                                width="800"
                                height="700"
                              ></iframe>
                              <div className="match-stats">
                                <h3>Sự Kiện Chính</h3>
                                <EventStat id={pid} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </TabContext>
                  </Box>
                )}

                {/* Hidden on view mobile */}
                {!matches && (
                  <div className="match-live-chat">
                    <div
                      className="pagination"
                      style={{ display: "flex", marginBottom: 10 }}
                    >
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
                      height="618"
                      src={URL_IFRAME_CHAT}
                      frameBorder="0"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hidden on view mobile */}
        {!matches && (
          <>
            <div className="app-live">
              <div className="container">
                <div className="match-details-odds">
                  <div className="match-introduction">
                    <div className="match-team">
                      <picture>
                        <img src={matchDetail?.team_home_logo ?? ""} alt="" />
                      </picture>
                      <div className="team-name">
                        <a>{matchDetail?.team_home_name ?? ""}</a>
                      </div>
                    </div>
                    <div className="match-center">
                      <div className="match-result">
                        {matchDetail?.score?.home ?? 0} -{" "}
                        {matchDetail?.score?.away ?? 0}
                      </div>
                      <div className="match-status">{matchDetail?.time}</div>
                      <div className="match-odds flex-column">
                        <div className="company">
                          {listDetailMatchOddsOptions?.map((item, idx) => (
                            <span
                              key={idx}
                              className={
                                dataDetailMatchOddsOptions === idx
                                  ? "active"
                                  : ""
                              }
                              onClick={() => setDataDetailMatchOddsOptions(idx)}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        <div className="show-odds">
                          <div className="soccer">
                            {matchOdds[dataDetailMatchOddsOptions]?.map(
                              (item, idx) => {
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
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="match-team">
                      <picture>
                        <img src={matchDetail?.team_away_logo ?? ""} alt="" />
                      </picture>
                      <div className="team-name">
                        <a>{matchDetail?.team_away_name ?? ""}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="match-amination">
                  <iframe
                    src={`${URL_AMINATION}?matchId=${pid}&accessKey=tEFL6ClbFnfkvmEn0xspIVQyPV9jAz9u&lang=vi`}
                    width="800"
                    height="700"
                  ></iframe>
                  <div className="match-stats">
                    <h3>Sự Kiện Chính</h3>
                    <EventStat id={pid} />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </main>
      <Script />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await getApiMatchList();
  return {
    paths: res.data.map((item) => ({ params: { pid: `${item.id}` } })),
    fallback: "blocking", // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  const matchID = context.params?.pid;
  if (!matchID) {
    return { notFound: true };
  }
  const res = await getApiMatchDetail(matchID);
  const resTheSports = await getApiTheSports(matchID);
  const resTheSportsLive = await getApiTheSportsLive(matchID);
  const resMatchOdds = await getApiMatchOdds(matchID);

  return {
    props: {
      matchDetail: res?.data,
      matchTheSports: resTheSports?.data,
      matchTheSportsLive: resTheSportsLive?.data,
      matchOdds: resMatchOdds?.data,
    },
    revalidate: 10, // In seconds
  };
}
