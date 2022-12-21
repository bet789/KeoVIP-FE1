import React, { useState, useEffect } from "react";
import Headhtml from "../containers/Headhtml";
import Script from "../containers/Script";
import styles from "../styles/Home.module.css";
import { Footer } from "../containers/Footer";
import { Header } from "../containers/Header";
import Paging from "../containers/Paging";
import axios from "axios";
import Link from "next/link";
import { Banner } from "../containers/Banner";
import SKHighLight from "../containers/Skeleton/SKHighLight";
import { API } from "../contants";

const Highlight = () => {
  const [highlight, setHighlight] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const responseHighlight = await axios.get(`${API}/website/highlight`, {
      params: {
        limit,
        page: page + 1,
      },
    });
    setHighlight(responseHighlight?.data?.data?.data ?? []);
    setTotal(responseHighlight?.data?.data?.total ?? 0);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page, limit]);

  return (
    <div className={styles.container}>
      <Headhtml />
      <main className={styles.main}>
        <Header />
        <div id="highlight-page">
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <h3 className="page-title mt-4">VIDEO HIGHLIGHT BÓNG ĐÁ TRẬN ĐẤU VỪA DIỄN RA</h3>
            <div className="highlight-container">
              <div className="row mb-3">
                {loading ? (
                  <SKHighLight />
                ) : (
                  highlight?.map((item, index) => (
                    <div className="col-12 co-md-6 col-lg-3 mb-3" key={item?.avatar}>
                      <Link key={index} href={`/highlight/${item?._id}`}>
                        <a>
                          <div className="highlight-item d-flex flex-lg-column ">
                            <div className="thumbnail position-relative">
                              <picture>
                                <img
                                  src={item?.avatar}
                                  alt={item?.title}
                                  // style={{ maxHeight: 145, minHeight: 145 }}
                                />
                              </picture>
                              {/* <i class="fa-solid fa-paper-plane"></i> */}
                            </div>
                            <div className="highlight-title">{item?.title}</div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))
                )}
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <Paging total={total} page={page} limit={limit} setPage={setPage} />
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
};

export default Highlight;
