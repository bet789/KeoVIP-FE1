import React from "react";
import Headhtml from "../containers/Headhtml";
import styles from "../styles/Home.module.css";
import { Header } from "../containers/Header";
import { Footer } from "../containers/Footer";
import { Banner } from "../containers/Banner";

const style = {
  display: "block",
  background: "#000",
  border: "none",
  height: "1500px",
  width: "100%",
  "overflow-y": "hidden",
  marginBottom: "30px",
};

const TyLeKeoPage = () => {
  return (
    <div className={styles.container}>
      <Headhtml />
      <main className={styles.main}>
        <Header />
        <div className="container-fluid" style={{ marginTop: 40 }}>
          <div className="banner">
            <Banner />
          </div>
          <iframe src="https://t5x4ob.kh5688.com/Newindex?OType=2&lang=vn" style={style}></iframe>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default TyLeKeoPage;
