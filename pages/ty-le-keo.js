import React from "react";
import Headhtml from "../containers/Headhtml";
import styles from "../styles/Home.module.css";
import { Header } from "../containers/Header";
import { Footer } from "../containers/Footer";
import { Banner } from "../containers/Banner";
import { URL_IFRAME_ODDS } from "../contants";
import { useState } from "react";
import { useEffect } from "react";

const style = {
  display: "block",
  background: "#000",
  border: "none",
  height: "1500px",
  width: "100%",
  "overflow-y": "hidden",
  marginBottom: "30px",
};
const key = {
  AcceptBetterOdds: true,
  AccountLevel: 3,
  AccountName: "gd003i0054q4",
  AllowOddsType: "MY|HK|DE|ID|US|",
  Balance: 0,
  BetCredit: 0,
  BrandCode: null,
  CommissionType: "A",
  Currency: "VD",
  CurrentLoginTime: "/Date(1671943894519)/",
  DefaultBetStake: 10,
  DefaultBetviewType: 2,
  GameCurrency: null,
  GivenCredit: 0,
  IsSm: false,
  IsTradeIn: 1,
  Language: "",
  LimitOddType: "ALL",
  MarketType: 0,
  MemberType: 1,
  MessageCount: 0,
  NickName: "V05healer999",
  OddType: "MY",
  Outstanding: 0,
  Partner: "V05BT",
  SecretKey: "525F4B50505B515D56504545515751535F475732030655445004545250401259",
  ShowBetConfirm: true,
  ShowForecastSummary: true,
  ShowPrebetConfirm: true,
  SourceName: "V05healer999",
  WalletType: 0,
  isCombinedParlay: true,
  isKiosk: false,
  isOtherSportsParlay: true,
  isParlay2Selection: true,
  isShowMr: false,
};
const TyLeKeoPage = () => {
  const [data, setData] = useState(key);
  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.getItem("userInfo");
  }, [data]);
  return (
    <div className={styles.container}>
      <Headhtml />
      <main className={styles.main}>
        <Header />
        <div className="container-fluid" style={{ marginTop: 40 }}>
          <div className="banner">
            <Banner />
          </div>
          <iframe src={URL_IFRAME_ODDS} style={style}></iframe>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default TyLeKeoPage;
