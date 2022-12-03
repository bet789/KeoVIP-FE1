import React, { useState, useEffect } from "react";
import Headhtml from "../../containers/Headhtml";
import Script from "../../containers/Script";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../containers/Footer";
import { Header } from "../../containers/Header";
import { Introduction } from "../../containers/Introduction";
import Paging from "../../containers/Paging";
import axios from "axios";
import { ip } from "../../data/ip";
import Link from "next/link";
import { useRouter } from "next/router";
import RelatedPost from "../../containers/RelatedPost";
import { Banner } from "../../containers/Banner";
import Tags from "../../containers/Tags";
import Schema from "../../containers/Schema";

const Highlight = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { pid } = router.query;
  const arr = pid?.split("-") ?? [];
  const id = arr.length > 1 ? arr[arr.length - 1] : "";
  const [highlight, setHighlight] = useState([]);
  const getData = async () => {
    const responseHighlight = await axios.get(`${ip}/website/highlight`, {
      params: {
        limit: 6,
        page: 1,
      },
    });
    setData(responseHighlight?.data?.data?.data ?? []);
    const res = await axios.get(`${ip}/website/highlight/${id}`);
    setHighlight(res?.data?.data ?? undefined);
  };

  useEffect(() => {
    if (id && id !== "") {
      getData();
    }
  }, [pid]);

  return (
    <div className={styles.container}>
      <Headhtml data={highlight} />
      <Schema post={highlight ?? {}} />
      <main className={styles.main}>
        <Header />
        <div id="highlight-page">
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <div className="row">
              <div className="col-12 col-lg-9">
                {highlight && (
                  <>
                    <p style={{ fontSize: 20, fontWeight: "bold" }}>{highlight?.title}</p>
                    <iframe
                      src={`https://www.youtube.com/embed/${highlight?.youtube_id}`}
                      style={{ width: "100%", height: 500 }}
                    />
                  </>
                )}
                <Tags data={highlight} onClickTag={() => location.reload()} />
              </div>
              <div className="col-12 col-lg-3" style={{ padding: 0 }}>
                <RelatedPost
                  data={data.filter((item) => item?._id != id).filter((_, index) => index < 5)}
                  keyAvatar="avatar"
                  keyTitle="title"
                  keyUrl="highlight"
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

export default Highlight;
