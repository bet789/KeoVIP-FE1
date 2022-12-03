import React, { useEffect, useState } from 'react';

import Headhtml from '../containers/Headhtml';
import { Footer } from '../containers/Footer';
import { Header } from '../containers/Header';
import { Introduction } from '../containers/Introduction';
import styles from '../styles/Home.module.css';
import { PostCard } from '../containers/PostCard';
import Script from '../containers/Script';
import axios from '../utility/axios';
import { ip } from '../data/ip';
import Paging from '../containers/Paging';
import { Banner } from '../containers/Banner';

const News = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const getDataNews = async () => {
    const response = await axios.get(`${ip}/website/news`, {
      params: {
        limit,
        page: page + 1,
      },
    });
    setData(response?.data?.data?.data ?? []);
    setTotal(response?.data?.data?.total ?? 0);
  };
  useEffect(() => {
    getDataNews();
  }, [limit, page]);
  return (
    <div className={styles.container}>
      <Headhtml />
      <main className={styles.main}>
        <Header />
        <div id="news-page">
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <h3 className="page-title mb-4 mt-4">
              ĐỘI NGŨ PHÓNG VIÊN TÁC NGHIỆP ĐƯA TIN TỨC BÓNG ĐÁ 24/7
            </h3>
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="row">
                  {data &&
                    data.length > 0 &&
                    data.map((item, index) => {
                      return index == 0 ? (
                        <div className="post-card col-12 col-lg-8 p-1 mb-3" key={item._id}>
                          <PostCard data={item} isBig={true} first={true} postpage={true} />
                        </div>
                      ) : (
                        <div className="post-card col-12 col-lg-4 p-1 mb-3" key={item._id}>
                          <PostCard data={item} postpage={true} />
                        </div>
                      );
                    })}
                </div>
                <div className="row">
                  <div className="col-12">
                    <Paging page={page} limit={limit} total={total} setPage={setPage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Introduction />
        <Footer />
      </main>
      <Script />
    </div>
  );
};

export default News;
