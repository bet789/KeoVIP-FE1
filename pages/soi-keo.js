import React, { useState, useEffect } from "react";
import Headhtml from "../containers/Headhtml";
import Script from "../containers/Script";
import { Footer } from "../containers/Footer";
import { Header } from "../containers/Header";
import styles from "../styles/Home.module.css";
import { PostCard } from "../containers/PostCard";
import axios from "axios";
import Paging from "../containers/Paging";
import { Banner } from "../containers/Banner";
import { API } from "../contants";

export default function Soikeopage() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const getDataNews = async () => {
    const response = await axios.get(`${API}/website/match`, {
      params: {
        page: 1,
        limit: 10000,
      },
    });
    setData(response?.data?.data?.data ?? []);
    setTotal(response?.data?.data?.data?.length ?? 0);
  };
  useEffect(() => {
    getDataNews();
  }, []);
  return (
    <div className={styles.container}>
      <Headhtml />
      <main className={styles.main}>
        <Header />
        <div id="soikeo-page">
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <h3 className="page-title mt-4">TIN SOI KÈO BÓNG ĐÁ HÔM NAY, NHẬN ĐỊNH PHÂN TÍCH KÈO CHÍNH XÁC</h3>
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="row">
                  {data &&
                    data.length > 0 &&
                    data
                      .filter((_, index) => page <= index + 1 && index + 1 <= page + limit)
                      .map((item, index) => {
                        return index == 0 ? (
                          <div className="col-12 col-lg-8" key={item.id}>
                            <PostCard data={item} isBig={true} first={true} postpage={true} url="soi-keo" />
                          </div>
                        ) : (
                          <div className="col-12 col-lg-4" key={item.id}>
                            <PostCard data={item} postpage={true} url="soi-keo" />
                          </div>
                        );
                      })}
                </div>
                <div className="row mb-3" style={{ marginTop: 10 }}>
                  <div className="col-12">
                    <Paging page={page} limit={limit} total={total} setPage={setPage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
      <Script />
    </div>
  );
}
