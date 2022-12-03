import React, { useState, useEffect } from 'react';
import Headhtml from '../containers/Headhtml';
import Script from '../containers/Script';
import { Footer } from '../containers/Footer';
import { Header } from '../containers/Header';
import { Introduction } from '../containers/Introduction';
import styles from '../styles/Home.module.css';
import { PostCard } from '../containers/PostCard';
import axios from 'axios';
import { ip } from '../data/ip';
import Paging from '../containers/Paging';
import { Banner } from '../containers/Banner';

export default function Handbook() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const getDataHandbook = async () => {
    const response = await axios.get(`${ip}/website/guide`, {
      params: {
        limit,
        page: page + 1,
      },
    });
    setData(response?.data?.data?.data ?? []);
    setTotal(response?.data?.data?.total ?? 0);
  };
  useEffect(() => {
    getDataHandbook();
  }, [limit, page]);
  return (
    <div className={styles.container}>
      <Headhtml />
      <main className={styles.main}>
        <Header />
        <div id="handbook-page">
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <h3 className="page-title mb-4 mt-4">CẨM NANG, TIPS BÓNG ĐÁ TỐT NHẤT</h3>
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="row">
                  {data &&
                    data.length > 0 &&
                    data.map((item, index) => {
                      return index == 0 ? (
                        <div className="col-12 col-lg-8" key={item.id} style={{ marginBottom: 20 }}>
                          <PostCard
                            data={item}
                            isBig={true}
                            first={true}
                            postpage={true}
                            url="cam-nang"
                          />
                        </div>
                      ) : (
                        <div className="col-12 col-lg-4" key={item.id} style={{ marginBottom: 20 }}>
                          <PostCard data={item} postpage={true} url="cam-nang" />
                        </div>
                      );
                    })}
                </div>
                <div className="row mb-3">
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
}
