import React, { useState, useEffect } from 'react';
import Headhtml from '../../containers/Headhtml';
import Script from '../../containers/Script';
import { Footer } from '../../containers/Footer';
import { Header } from '../../containers/Header';
import { Introduction } from '../../containers/Introduction';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import { ip } from '../../data/ip';
import { useRouter } from 'next/router';
import RelatedPost from '../../containers/RelatedPost';
import { Banner } from '../../containers/Banner';
import Tags from '../../containers/Tags';
import Schema from '../../containers/Schema';

export default function Handbook() {
  const router = useRouter();
  const { pid } = router.query;
  const arr = pid?.split('-') ?? [];
  const id = arr.length > 1 ? arr[arr.length - 1] : '';
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const getDataHandbook = async () => {
    const response = await axios.get(`${ip}/website/guide`, {
      params: {
        limit: 6,
        page: 1,
      },
    });
    setList(response?.data?.data?.data ?? []);
    const res = await axios.get(`${ip}/website/guide/${id}`);
    setData(res?.data?.data ?? undefined);
  };
  useEffect(() => {
    if (id && id !== '') getDataHandbook();
  }, [pid]);
  return (
    <div className={styles.container}>
      <Headhtml data={data} />
      <Schema post={data ?? {}} />
      <main className={styles.main}>
        <Header />
        <div id="handbook-page" style={{ marginTop: 20 }}>
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <div className="row">
              <div className="col-12 col-lg-9">
                <p style={{ fontSize: 25, fontWeight: 'bold' }}>{data?.title}</p>
                <div
                  id="content-guide"
                  dangerouslySetInnerHTML={{ __html: data?.content }}
                  style={{
                    width: '100%',
                    minHeight: 500,
                    padding: 10,
                    backgroundColor: '#181D23',
                  }}
                />
                <Tags data={data} onClickTag={() => location.reload()} />
              </div>
              <div className="col-12 col-lg-3" style={{ padding: 0 }}>
                <RelatedPost
                  data={list.filter((item) => item?._id != id).filter((_, index) => index < 5)}
                  keyAvatar="avatar"
                  keyTitle="title"
                  keyUrl="cam-nang"
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
}
