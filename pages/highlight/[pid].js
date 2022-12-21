import React, { useState, useEffect } from "react";
import Headhtml from "../../containers/Headhtml";
import Script from "../../containers/Script";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../containers/Footer";
import { Header } from "../../containers/Header";
import Paging from "../../containers/Paging";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import RelatedPost from "../../containers/RelatedPost";
import { Banner } from "../../containers/Banner";
import Tags from "../../containers/Tags";
import Schema from "../../containers/Schema";
import { getApiHighLight, getApiHighLightDetail } from "../api";

const Highlight = ({ matchHighLightDetail, matchHighLight }) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className={styles.container}>
      <Headhtml data={matchHighLightDetail} />
      <Schema post={matchHighLightDetail ?? {}} />
      <main className={styles.main}>
        <Header />
        <div id="highlight-page">
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <div className="row">
              <div className="col-12 col-lg-9">
                {matchHighLightDetail && (
                  <>
                    <p style={{ fontSize: 20, fontWeight: "bold" }}>{matchHighLightDetail?.title}</p>
                    <iframe
                      src={`https://www.youtube.com/embed/${matchHighLightDetail?.youtube_id}`}
                      style={{ width: "100%", height: 500 }}
                    />
                  </>
                )}
                {/* <Tags data={matchHighLight} onClickTag={() => location.reload()} /> */}
              </div>
              <div className="col-12 col-lg-3" style={{ padding: 0 }}>
                <RelatedPost
                  data={matchHighLight?.filter((item) => item?._id != pid).filter((_, index) => index < 5)}
                  keyAvatar="avatar"
                  keyTitle="title"
                  keyUrl="highlight"
                  keyId="_id"
                />
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
export async function getStaticPaths() {
  const res = await getApiHighLight();
  return {
    paths: res.data.data.map((item) => ({ params: { pid: `${item._id}` } })),
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  const Id = context.params?.pid;
  if (!Id) {
    return { notFound: true };
  }
  const res = await getApiHighLightDetail(Id);
  const resHighLight = await getApiHighLight();
  return {
    props: {
      matchHighLightDetail: res?.data,
      matchHighLight: resHighLight?.data?.data,
    },
    revalidate: 10, // In seconds
  };
}
export default Highlight;
