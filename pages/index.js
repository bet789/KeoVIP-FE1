import React, { useEffect, useState } from "react";

import { Footer } from "../containers/Footer";
import { Header } from "../containers/Header";
import Headhtml from "../containers/Headhtml";
import HotLive from "../containers/HotLive";
import LiveHome from "../containers/LiveHome";
import { MatchCard2 } from "../containers/MatchCard2";
import Schema from "../containers/Schema";
import Script from "../containers/Script";
import styles from "../styles/Home.module.css";
import axios from "../utility/axios";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Marquee from "../containers/Marquee";
import CountDown from "../containers/CountDown";
import Ads from "../containers/Ads";
import { ADS_BANNER_BOTTOM, ADS_KEOVIP, API, URL_IMAGE_BACKGROUND } from "../contants";
import { useMemo } from "react";
import { Box } from "@mui/material";
import { getApiMatchList, getApiTheSports, getApiTheSportsLive } from "./api";

export default function Home({ matchList, matchTheSports, matchTheSportsLive }) {
  const [matchLive, setMatcheLive] = useState([]);
  const matchLiveHome = useMemo(() => {
    return matchList?.filter((data) => data.status !== "");
  }, [matchList]);

  const getLiveHome = () => {
    matchList.map((item) => {
      if (item.screen === true) {
        setMatcheLive([item]);
      }
    });
  };

  useEffect(() => {
    getLiveHome();
  }, [matchList]);

  const sampleContainer = {
    maxHeight: "705px",
  };

  const getIdItemMatch = (id) => {
    const itemMatch = matchList.filter((item) => {
      return item.id === id;
    });

    if (itemMatch.length > 0) {
      setMatcheLive((prevState) => [...prevState, itemMatch[0]]);
    }
  };
  return (
    <div className={styles.container}>
      <Headhtml />
      <Schema />
      <main id="main" className={styles.main}>
        <div id="homepage">
          <Header />
          <picture>
            <img src={URL_IMAGE_BACKGROUND} className="bg_homepage" alt="bg_homepage" />
          </picture>

          <div className="home-live">
            <a href={ADS_KEOVIP} target="_blank">
              <div className="ads-mobile" style={{ display: "none" }}>
                <img src={ADS_BANNER_BOTTOM} width="100%" height="70px" />
              </div>
            </a>
            <Marquee />
            <div className="main-live">
              <div className="main-live-app">
                <div className="action-hot-live">
                  {matchLive && matchLive.length > 0 ? (
                    <div>
                      <LiveHome
                        matchTheSportsLive={matchTheSportsLive}
                        matchTheSports={matchTheSports}
                        data={matchLive[matchLive.length - 1]}
                      />
                    </div>
                  ) : (
                    matchList &&
                    matchList.length > 0 && (
                      <div>
                        <LiveHome
                          matchTheSportsLive={matchTheSportsLive}
                          matchTheSports={matchTheSports}
                          data={matchList[matchList.length - 1]}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className=" main-card-header">
                <PerfectScrollbar style={sampleContainer}>
                  <div className="card-top">
                    {matchLiveHome.length > 0
                      ? matchLiveHome.map((item) => {
                          return (
                            <div className="col-12 col-md-6 col-lg-12 mb-2" key={item.id}>
                              <MatchCard2 data={item} matchTheSports={matchTheSports} getIdItemMatch={getIdItemMatch} />
                            </div>
                          );
                        })
                      : matchList.map((item) => {
                          return (
                            <div className="col-12 col-md-6 col-lg-12 mb-2" key={item.id}>
                              <MatchCard2 data={item} getIdItemMatch={getIdItemMatch} />
                            </div>
                          );
                        })}
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
          </div>
        </div>

        <div className="app-live">
          <div className="container">
            <Ads />
            <CountDown timer={1800} />
            <HotLive />
            <div className="row">
              <div className="col-md-7 mb-3">
                <div className="news-selector">
                  <ul>
                    <span>
                      <img src="/assets/images/Group 5.webp" />
                    </span>
                    <li>
                      <span>GIỚI THIỆU KEOVIP.TV</span>
                    </li>
                  </ul>
                  <div className="news">
                    <p className="title">Keovip là gì?</p>
                    <p style={{ fontWeight: 100 }}>
                      Keovip TV là trang web phát sóng trực tiếp bóng đá miễn phí với chất lượng cao và là kênh xem bóng
                      đá trực tuyến được yêu thích nhất Việt Nam. Nơi mà tất cả các giải đấu bóng đá hàng đầu trong cho
                      đến ngoài nước đều được trực tiếp đầy đủ. Giúp bạn xem được trận đấu mình thích với trải nghiệm
                      cao nhất. Chính vì thế, nếu có nhu cầu xem bất kỳ trận đấu nào, bạn hãy truy cập vào đây để lấy
                      được link xem bóng đá uy tín nhất nhé.
                    </p>
                    <p className="title">Mục tiêu phát triển của trang web trực tiếp bóng đá Keovip.tv</p>
                    <p style={{ fontWeight: 100 }}>
                      Đây là thời buổi của công nghệ số, cho nên đa số mọi người đều chọn cách xem trực tiếp bóng đá
                      trên điện thoại, máy tính,.. hơn là xem trên TV như trước. Để có thể xem được 1 trận bóng đá trực
                      tiếp với chất lượng cao, đầu tiên bạn phải truy cập vào 1 website uy tín. Tuy nhiên hiện tại ở
                      Việt Nam không có quá nhiều website bóng đá làm được điều này. Cho nên, keovip.tv ra đời với mục
                      đích giúp mọi người có được một địa chỉ xem bóng đá chất lượng cao
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img className="image-news" src="/assets/images/imnew 1.webp" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
      <Script />
    </div>
  );
}
export async function getStaticProps(context) {
  const response = await getApiMatchList();
  const resTheSports = await getApiTheSports();
  const resTheSportsLive = await getApiTheSportsLive();
  return {
    props: {
      matchList: response?.data,
      matchTheSports: resTheSports?.data,
      matchTheSportsLive: resTheSportsLive?.data,
    }, // will be passed to the page component as props
    revalidate: 10, // In seconds
  };
}
