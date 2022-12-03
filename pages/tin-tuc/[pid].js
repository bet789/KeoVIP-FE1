import React, { useEffect, useState } from 'react';

import Headhtml from '../../containers/Headhtml';
import { Footer } from '../../containers/Footer';
import { Header } from '../../containers/Header';
import { Introduction } from '../../containers/Introduction';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import Script from '../../containers/Script';
import axios from '../../utility/axios';
import { ip } from '../../data/ip';
import RelatedPost from '../../containers/RelatedPost';
import { Banner } from '../../containers/Banner';
import Tags from '../../containers/Tags';
import Schema from '../../containers/Schema';

const DetaiilNews = () => {
  const router = useRouter();
  const { pid } = router.query;
  const arr = pid?.split('-') ?? [];
  const id = arr.length > 1 ? arr[arr.length - 1] : '';
  const [data, setData] = useState(undefined);
  const [list, setList] = useState([]);

  const getDataNews = async () => {
    const response = await axios.get(`${ip}/website/news`, {
      params: {
        limit: 6,
        page: 0,
      },
    });

    let tmp = response?.data?.data?.data ?? [];
    setList(tmp);
    const res = await axios.get(`${ip}/website/news/${id}`);
    setData(res?.data?.data ?? undefined);
  };

  const handleClickTag = () => {
    location.reload();
  };

  useEffect(() => {
    if (id && id !== '') {
      getDataNews();
    }
    // eslint-disable-next-line
  }, [pid]);

  return (
    <div className={styles.container}>
      <Headhtml data={data} />
      <Schema post={data ?? {}} />
      <main className={styles.main}>
        <Header />
        <div id="news-page" style={{ marginBottom: 20 }}>
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <h3 className="page-title mb-4 mt-4">{data?.title ?? ''}</h3>
            <div className="row">
              <div className="col-12 col-md-9">
                <div
                  id="content-news"
                  dangerouslySetInnerHTML={{ __html: data?.content ?? '' }}
                  style={{
                    width: '100%',
                    minHeight: 500,
                    backgroundColor: '#191D23',
                    padding: 10,
                  }}
                />
                <Tags data={data} onClickTag={handleClickTag} />
              </div>
              <div className="col-12 col-lg-3" style={{ padding: 0 }}>
                <RelatedPost
                  data={list.filter((item) => item?._id != id).filter((_, index) => index < 5)}
                  keyAvatar="avatar"
                  keyTitle="title"
                  keyUrl="tin-tuc"
                  keyId="_id"
                />
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

export default DetaiilNews;
