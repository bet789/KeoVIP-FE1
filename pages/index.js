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
import {
  ADS_BANNER_BOTTOM,
  ADS_KEOVIP,
  API,
  URL_IMAGE_BACKGROUND,
} from "../contants";
import { useMemo } from "react";
import { Box } from "@mui/material";
import { getApiMatchList, getApiTheSports, getApiTheSportsLive } from "./api";

export default function Home({
  matchList,
  matchTheSports,
  matchTheSportsLive,
}) {
  const [matchLive, setMatcheLive] = useState([]);
  const matchLiveHome = useMemo(() => {
    return matchList?.filter((data) => data.status !== "");
  }, [matchList]);

  const getLiveHome = async () => {
    await matchList.forEach((item) => {
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
            <img
              src={URL_IMAGE_BACKGROUND}
              className="bg_homepage"
              alt="bg_homepage"
            />
          </picture>

          <div className="home-live">
            <Marquee />
            <div className="main-live">
              <div className="main-live-app">
                <div className="action-hot-live">
                  {matchLive && matchLive.length > 0 ? (
                    <LiveHome
                      matchTheSportsLive={matchTheSportsLive}
                      matchTheSports={matchTheSports}
                      data={matchLive[matchLive.length - 1]}
                    />
                  ) : (
                    matchList &&
                    matchList.length > 0 && (
                      <LiveHome
                        matchTheSportsLive={matchTheSportsLive}
                        matchTheSports={matchTheSports}
                        data={matchList[matchList.length - 1]}
                      />
                    )
                  )}
                </div>
              </div>
              <div className=" main-card-header">
                <PerfectScrollbar style={sampleContainer}>
                  <div className="card-top">
                    {matchLiveHome?.length > 0
                      ? matchLiveHome?.map((item) => {
                          return (
                            <div
                              className="col-12 col-md-6 col-lg-12 mb-2"
                              key={item.id}
                            >
                              <MatchCard2
                                data={item}
                                matchTheSports={matchTheSports}
                                getIdItemMatch={getIdItemMatch}
                              />
                            </div>
                          );
                        })
                      : matchList.map((item) => {
                          return (
                            <div
                              className="col-12 col-md-6 col-lg-12 mb-2"
                              key={item.id}
                            >
                              <MatchCard2
                                data={item}
                                getIdItemMatch={getIdItemMatch}
                              />
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
            <HotLive />
            <div className="row">
              <div className="col-md-7 mb-3">
                <div className="news-selector">
                  <ul>
                    <span>
                      <img src="/assets/images/Group 5.webp" />
                    </span>
                    <li>
                      <span>GI???I THI???U KEOVIP.TV</span>
                    </li>
                  </ul>
                  <div className="news">
                    <p className="title">Keovip l?? g???</p>
                    <p style={{ fontWeight: 100 }}>
                      Keovip TV l?? trang web ph??t s??ng tr???c ti???p b??ng ???? mi???n
                      ph?? v???i ch???t l?????ng cao v?? l?? k??nh xem b??ng ???? tr???c tuy???n
                      ???????c y??u th??ch nh???t Vi???t Nam. N??i m?? t???t c??? c??c gi???i ?????u
                      b??ng ???? h??ng ?????u trong cho ?????n ngo??i n?????c ?????u ???????c tr???c
                      ti???p ?????y ?????. Gi??p b???n xem ???????c tr???n ?????u m??nh th??ch v???i
                      tr???i nghi???m cao nh???t. Ch??nh v?? th???, n???u c?? nhu c???u xem b???t
                      k??? tr???n ?????u n??o, b???n h??y truy c???p v??o ????y ????? l???y ???????c link
                      xem b??ng ???? uy t??n nh???t nh??.
                    </p>
                    <p className="title">
                      M???c ti??u ph??t tri???n c???a trang web tr???c ti???p b??ng ????
                      Keovip.tv
                    </p>
                    <p style={{ fontWeight: 100 }}>
                      ????y l?? th???i bu???i c???a c??ng ngh??? s???, cho n??n ??a s??? m???i ng?????i
                      ?????u ch???n c??ch xem tr???c ti???p b??ng ???? tr??n ??i???n tho???i, m??y
                      t??nh,.. h??n l?? xem tr??n TV nh?? tr?????c. ????? c?? th??? xem ???????c 1
                      tr???n b??ng ???? tr???c ti???p v???i ch???t l?????ng cao, ?????u ti??n b???n
                      ph???i truy c???p v??o 1 website uy t??n. Tuy nhi??n hi???n t???i ???
                      Vi???t Nam kh??ng c?? qu?? nhi???u website b??ng ???? l??m ???????c ??i???u
                      n??y. Cho n??n, keovip.tv ra ?????i v???i m???c ????ch gi??p m???i ng?????i
                      c?? ???????c m???t ?????a ch??? xem b??ng ???? ch???t l?????ng cao
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
