import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API } from "../contants";
import { MatchDetailsContext } from "../pages/chi-tiet-tran-dau/[pid]";
import axios from "../utility/axios";
import { FearHistory } from "./FearHistory";

export const TopBet = (props) => {
  const router = useRouter();
  const [dataTopBet, setDataTopBet] = useState([]);

  useEffect(() => {
    getDataIntro();
  }, []);

  const getDataIntro = async () => {
    const response = await axios.get(`${API}/website/setting/top-bet`);
    setDataTopBet(response?.data?.data ?? []);
  };

  return (
    <>
      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="row mb-3 topbet">
          <div className="col-12 col-lg-8">
            <div className="col-12 d-flex justify-content-between">
              <div className="title-sub-section">
                <span>Lịch sử</span>
                <span>Đối đầu</span>
              </div>
            </div>
            <FearHistory />
          </div>
          <div className="col-12 col-lg-4">
            <div className="col-12 d-flex justify-content-between">
              <div className="title-sub-section">
                <span>Top</span>
                <span>Nhà cái</span>
              </div>
            </div>
            <div className="content-container">
              <div className="content">
                {dataTopBet?.map((item, idx) => {
                  return (
                    <div key={idx} className="topbet-item mb-4">
                      <div className="topbet-item-label" style={{ background: idx === 0 ? "red" : "blue" }}>
                        {idx + 1}
                      </div>
                      <div className="topbet-item-logo">
                        <picture>
                          <img src={item.image} alt={item?.name} />
                        </picture>
                      </div>
                      <div className="topbet-item-rating">
                        <div className="topbet-item-rating-title">{item?.name}</div>
                        <div className="topbet-item-rating-star">
                          <StarIcon className="point" />
                          <StarIcon className="point" />
                          <StarIcon className="point" />
                          <StarIcon className="point" />
                          <StarIcon className="point" />
                        </div>
                        <div className="topbet-item-rating-button">
                          <button onClick={() => item.url && window.open(item.url)}>Đặt cược</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
