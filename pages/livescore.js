import React, { useEffect, useState } from "react";
import Headhtml from "../containers/Headhtml";
import Script from "../containers/Script";
import { Footer } from "../containers/Footer";
import { Header } from "../containers/Header";
import styles from "../styles/Home.module.css";
import axios from "../utility/axios";
import { Banner } from "../containers/Banner";
import moment from "moment";
import { API } from "../contants";

export default function LiveScorePage() {
  const [data, setData] = useState([]);
  const getDataLivescore = async () => {
    const response = await axios.get(`${API}/website/livescore`);
    setData(response?.data?.data ?? []);
  };

  useEffect(() => {
    getDataLivescore();
    const interval = setInterval(() => {
      getDataLivescore();
    }, 11000);
  }, []);
  const thuArr = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ nhật"];
  return (
    <div className={styles.container}>
      <Headhtml />
      <main className={styles.main}>
        <Header />
        <div id="livescore-page">
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <h3 className="page-title mt-4">Livescore 7m - Tỷ số trực tuyến nhanh nhất</h3>
            <div className="row">
              <div className="col-12">
                <div className="timezone">
                  <span>GMT+0700</span>
                  <span>
                    <picture>
                      <img src="https://i3.wp.com/img.7m.com.cn/v2/skin2/clock.gif" alt="" />
                    </picture>
                  </span>
                </div>

                <div className="options">
                  <div className="right">
                    <span className="icon i_reload"></span>
                    <span className="sound soundON"></span>
                    <span className="sound soundOFF"></span>
                    <span className="icon winON"></span>
                    <span className="icon winOFF"></span>
                  </div>
                </div>

                <div className="table-container">
                  <table>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td style={{ background: item?.leagueColor }}>
                            <span>{item?.leagueShortName}</span>
                          </td>
                          <td className="state">
                            <span style={{ color: "#000" }}>
                              {getStatus(item.status, item.halfStartTime ? item.halfStartTime : item.matchTime)}
                            </span>
                          </td>
                          <td className="team-home">
                            {item.homeYellow !== 0 ? <sup>[{item.homeYellow}]</sup> : ""}
                            {item?.homeName ?? ""}
                          </td>
                          <td className="score">
                            {" "}
                            {item?.homeScore ?? ""} - {item?.awayScore ?? ""}
                          </td>
                          <td className="team-away">
                            {item?.awayName ?? ""}
                            {item.awayYellow !== 0 ? <sup>[{item.awayYellow}]</sup> : ""}
                          </td>
                          <td className="ht">
                            {item.homeCorner} - {item.awayCorner}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="remark">
                  Chú ý :
                  <span>
                    <picture>
                      <img src="https://img.7m.com.cn/v2/birs.gif" alt="" />
                    </picture>
                  </span>
                  là cá độ trực tiếp, (T)biểu thị sân trung lập.
                </p>

                <p className="intro">
                  Đối với những anh em yêu bóng đá thì chắc chắn Livescore là một ứng dụng không thể thiếu. Bởi ứng dụng
                  này giúp người dùng biết được rất nhiều những thông tin bóng đá quan trọng một cách khá dễ dàng. Hiện
                  tại <b>Kèo VIP</b> chính là website cung cấp ứng dụng Livescore hàng đầu theo như đánh giá của mọi
                  người.
                </p>
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

function getStatus(status, time) {
  switch (+status) {
    case 0:
      return moment.unix(+time).format("HH:mm");
    case 1:
    case 3:
      const timeHStart = moment().diff(moment.unix(+time).subtract(45, "minute"), "minutes");
      return (+timeHStart > 90 ? "90+" : timeHStart) + "'";
    case 4:
    case 5:
      const timeStart = moment().diff(moment.unix(+time), "minutes");
      return (+timeStart > 90 ? "90+" : timeStart) + "'";
    case 2:
      return "Nghỉ giữa hiệp";
    default:
      return "FT";
  }
}
