import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Banner } from "../containers/Banner";

import { Footer } from "../containers/Footer";
import { Header } from "../containers/Header";
import Headhtml from "../containers/Headhtml";
import HotLive from "../containers/HotLive";
import { Introduction } from "../containers/Introduction";
import LiveHome from "../containers/LiveHome";
import Loading from "../containers/Loading";
import { MatchCard } from "../containers/MatchCard";
import { MatchCard2 } from "../containers/MatchCard2";
import { PostCard } from "../containers/PostCard";
import { PostVideoCard } from "../containers/PostVideoCard";
import Schema from "../containers/Schema";
import Script from "../containers/Script";
import { ip } from "../data/ip";
import styles from "../styles/Home.module.css";
import axios from "../utility/axios";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Marquee from "../containers/Marquee";

// export async function getServerSideProps() {
//   const response = await axios.get(`${ip}/website/news`, {
//     params: {
//       limit: 7,
//       page: 1,
//     },
//   });

//   const responseMatch = await axios.get(`${ip}/website/match`, {
//     params: {
//       limit: 7,
//       page: 1,
//     },
//   });

//   const responseHighlight = await axios.get(`${ip}/website/highlight`, {
//     params: {
//       limit: 7,
//       page: 1,
//     },
//   });
//   return {
//     props: {
//       news: response?.data?.data?.data ?? [],
//       highlight: responseHighlight?.data?.data?.data ?? [],
//       match: responseMatch?.data?.data?.data ?? [],
//     },
//   };
// }

export async function getStaticProps(context) {
  const response = await axios.get(`${ip}/website/matches?type=home`);
  return {
    props: {
      matchList: response?.data?.data ?? [],
    }, // will be passed to the page component as props
    revalidate: 10, // In seconds
  };
}

export default function Home({ matchList }) {
  // const [matchList, setMatchList] = useState([]);
  const [matchBlv, setMatchBlv] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [filter, setFilter] = useState("all");
  const [categories, setCategories] = useState([]);
  const [urlMatches, setUrlMatches] = useState("/website/matches?type=home");
  const [urlMatcheBlv, setUrlMatcheBlv] = useState("/website/matches?type=blv");
  const [matchLive, setMatcheLive] = useState([]);
  const getDataMatchList = async () => {
    const response = await axios.get(`${ip}${urlMatches}`);
    setCategories(response?.data?.data?.categories ?? []);
    setMatchList(response?.data?.data ?? []);
  };
  const getDataMatchBlv = async () => {
    const response = await axios.get(`${ip}${urlMatcheBlv}`);
    setMatchBlv(response?.data?.data ?? []);
  };
  const getLiveHome = () => {
    matchList.map((item) => {
      if (item.screen === true) {
        setMatcheLive([item]);
      }
    });
  };
  useEffect(() => {
    // getDataMatchList();
    getDataMatchBlv();
  }, [urlMatches]);

  useEffect(() => {}, [filter]);
  useEffect(() => {
    getLiveHome();
  }, [matchList]);
  const changeMatchFilter = (name) => {
    setFilter(name);
  };
  const sampleContainer = {
    maxHeight: "705px",
  };

  const getIdItemMatch = (id) => {
    const itemMatch = matchList.filter((item) => {
      return item.id === id;
    });
    const itemMatchBLV = matchBlv.filter((item) => {
      return item.id === id;
    });

    if (itemMatch.length > 0) {
      setMatcheLive((prevState) => [...prevState, itemMatch[0]]);
    }

    if (itemMatchBLV.length > 0) {
      setMatcheLive((prevState) => [...prevState, itemMatchBLV[0]]);
    }
  };
  // console.log(matchList);
  // console.log(matchLive);
  return (
    <div className={styles.container}>
      <Headhtml />
      <Schema />
      <main id="main" className={styles.main}>
        <div id="homepage">
          <Header />
          <picture>
            <img
              src="https://senbackkg.kz4702q.com/main-consumer-web/assets-oss/commons/images/worldCupLanding/banner_loaded.2e26c37489fb845f412c90b2056be180.webp"
              className="bg_homepage"
              alt="bg_homepage"
            />
          </picture>
          <div className="home-live">
            <Marquee />
            {/* <div className="banner">
              <Banner />
            </div> */}
            {/* <h3 className="page-title mt-4 text-center" style={{ color: "black" }}>
              LINK XEM BÓNG ĐÁ TRỰC TUYẾN TỐC ĐỘ CAO, TRỰC TIẾP BÓNG ĐÁ HÔM NAY
            </h3> */}
            <div className="main-live">
              <div className="main-live-app">
                <div className="action-hot-live">
                  {matchLive && matchLive.length > 0 ? (
                    <div>
                      <LiveHome data={matchLive[matchLive.length - 1]} />
                    </div>
                  ) : (
                    matchList &&
                    matchList.length > 0 && (
                      <div>
                        <LiveHome data={matchList[matchList.length - 1]} />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className=" main-card-header">
                <PerfectScrollbar style={sampleContainer}>
                  <div className="card-top">
                    {matchBlv.length > 3
                      ? matchBlv
                          .filter((item, index) => page <= index + 1 && index + 1 <= page + limit - 1)
                          .map((item) => {
                            return (
                              <div className="col-12 col-md-6 col-lg-12 mb-2" key={item.id}>
                                <MatchCard2 data={item} getIdItemMatch={getIdItemMatch} />
                              </div>
                            );
                          })
                      : matchList
                          .filter((item, index) => page <= index + 1 && index + 1 <= page + 10 - 1)
                          .map((item) => {
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

            {/* <div className="row mb-3">
              <div className="col-12">
                <button className="w-100 load-more" onClick={() => setLimit(limit + 10)}>
                  Xem thêm lịch trực tiếp
                </button>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-between">
                <div className="title-sub-section">
                  <span>soi kèo</span>
                  <span>Bóng đá hôm nay</span>
                </div>
                <Link href="/soi-keo">
                  <a>Tất cả</a>
                </Link>
              </div>
            </div>
            <div className="row post-list p-3">
              {match &&
                match.length > 0 &&
                match.map((item, index) => {
                  return index == 0 ? (
                    <div className="col-12 col-lg-6 mb-3" key={item.id} style={{ padding: 0 }}>
                      <PostCard data={item} isBig={true} first={true} homepage={true} url="soi-keo" index={index} />
                    </div>
                  ) : (
                    <div
                      className="col-12 col-lg-3 mb-3"
                      key={item.id}
                      style={{
                        padding: 0,
                      }}
                    >
                      <PostCard data={item} homepage={true} url="soi-keo" index={index} />
                    </div>
                  );
                })}
            </div>

            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-between">
                <div className="title-sub-section">
                  <span>Tin tức</span>
                  <span>Bóng đá hôm nay</span>
                </div>
                <Link href="/tin-tuc">
                  <a>Tất cả</a>
                </Link>
              </div>
            </div>
            <div className="row post-list p-3">
              {news &&
                news.length > 0 &&
                news.map((item, index) => {
                  return index == 0 ? (
                    <div className="col-12 col-lg-6 p-0 mb-3 mb-lg-2 mt-lg-2 pr-2 pl-2" key={item.id}>
                      <PostCard data={item} isBig={true} first={true} homepage={true} />
                    </div>
                  ) : (
                    <div className="col-12 col-lg-3 p-0 mb-3 mb-lg-2 mt-lg-2 pr-2 pl-2" key={item.id}>
                      <PostCard data={item} homepage={true} index={index} />
                    </div>
                  );
                })}
            </div>

            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-between">
                <div className="title-sub-section">
                  <span>Video</span>
                  <span>highlight</span>
                </div>
                <Link href="/highlight">
                  <a>Tất cả</a>
                </Link>
              </div>
            </div>

            <div className="row highlight-list p-3">
              {highlight && highlight.length > 0 && (
                <div
                  className="col-12 col-lg-6 p-0 mb-3 mb-lg-2 mt-lg-2 pr-2 pl-2"
                  key={highlight[0].id}
                  style={{ padding: "0px !important", margin: "0px !important" }}
                >
                  <PostVideoCard data={highlight[0]} isBig={true} />
                </div>
              )}
              <div className="col-12 col-lg-6" style={{ minHeight: 450 }}>
                <div className="row">
                  {highlight &&
                    highlight.length > 0 &&
                    highlight.map((item, index) => {
                      return (
                        index != 0 && (
                          <div
                            className="col-12 col-lg-4 p-0 mb-3 mb-lg-2 mt-lg-2 pr-2 pl-2"
                            key={item.id}
                            style={{ padding: "0px !important", margin: "0px !important" }}
                          >
                            <PostVideoCard data={item} index={index} />
                          </div>
                        )
                      );
                    })}
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="app-live">
          <div className="container">
            <HotLive />
            {/* <div className="row ">
              {matchList &&
                matchList.length > 0 &&
                matchList
                  .filter((item, index) => page <= index + 1 && index + 1 <= page + limit - 1)
                  .map((item) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4 mb-4" key={item._id}>
                        <MatchCard data={item} />
                      </div>
                    );
                  })}
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <button className="w-100 load-more" onClick={() => setLimit(limit + 12)}>
                  Xem thêm lịch trực tiếp
                </button>
              </div>
            </div> */}
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
        {/* <Introduction /> */}
      </main>
      <Script />
    </div>
  );
}
