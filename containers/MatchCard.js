import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ip } from "../data/ip";
import Loading from "./Loading";

export const MatchCard = (props) => {
  const router = useRouter();
  const { data } = props;
  const {
    linkMatch,
    category,
    date,
    home,
    away,
    result,
    time,
    team_home_logo,
    team_home_name,
    team_away_logo,
    team_away_name,
    commentator,
    status,
    score,
    bet,
    league,
  } = data;
  const imgTmp = "https://apivaobo.xyz/logo_teams/no-logo.gif";
  return (
    <div className="card-border">
      <Link href={`/chi-tiet-tran-dau/${data?.slug ?? ""}-${data?.id}`}>
        <div className="match_card text-light">
          <div className="match_header d-flex justify-content-between">
            <span className="match_title">{league}</span>
            <Link target={"_blank"} href="https://www.7897890.vip/">
              <span className="match_time" style={{ fontSize: "12px" }}>
                Cược ngay
              </span>
            </Link>
          </div>
          <div className="match_body d-flex justify-content-between justify-content-lg-around">
            <div className="team d-flex flex-column align-items-center">
              <picture>
                <img src={team_home_logo !== "undefined" ? team_home_logo : imgTmp} alt={team_home_name} />
              </picture>

              <span className="team_name">{team_home_name.slice(0, 15) ?? ""}</span>
              {/* <span
                className="watch_now"
                onClick={async () => {
                  router.push(`/chi-tiet-tran-dau/${data?.id}`);
                }}
              >
                Xem ngay
              </span> */}
            </div>
            <div className="match_status d-flex flex-column justify-content-center">
              {/* {isHappening ? (
                <div className="happening d-flex flex-column justify-content-center align-items-center">
                  <span className="current_status">{currentStatus}</span>
                  <span className="current_result">{currentResult}</span>
                </div>
              ) : (
                <div className="waiting d-flex flex-column justify-content-center align-items-center">
                  <span className="current_status">{currentStatus}</span>
                  <span className="current_result">{currentResult}</span>
                </div>
              )} */}
              <div className="happening d-flex flex-column justify-content-center align-items-center">
                {status !== "" ? null : <span className="match_time">{time === "" ? "Chưa bắt đầu" : time}</span>}
                {commentator && (
                  <span
                    className="blv"
                    style={{ color: "#FEC006", width: 90, textAlign: "center", fontWeight: "bold" }}
                  >
                    BLV: {commentator}
                  </span>
                )}
                {status !== "" ? (
                  <>
                    <span className="current_status" style={{ minWidth: 28, maxWidth: "max-content" }}>
                      {status}
                    </span>
                    <span className="current_result">
                      <span style={{ margin: "0px 10px" }}>{score?.home ?? 0}</span> <span></span>
                      <span style={{ margin: "0px 10px" }}> {score?.away ?? 0}</span>
                    </span>
                  </>
                ) : (
                  <p style={{ fontSize: 32, color: "#ffffffb0", margin: 0 }}>vs</p>
                )}
              </div>
            </div>
            <div className="team d-flex flex-column align-items-center">
              <picture>
                <img src={team_away_logo !== "undefined" ? team_away_logo : imgTmp} alt={team_away_name} />
              </picture>
              <span className="team_name">{team_away_name.slice(0, 15) ?? ""}</span>
            </div>
          </div>
          {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href={`/chi-tiet-tran-dau/${data?.slug ?? ''}-${data?.id}`}>
            <a>
              <div
                style={{
                  backgroundColor: '#0F4CD9',
                  padding: '5px 10px',
                  borderRadius: 20,
                  marginRight: 20,
                }}
              >
                Xem ngay
              </div>
            </a>
          </Link>
          <Link href={bet}>
            <a target="_blank">
              <div style={{ backgroundColor: '#009B3A', padding: '5px 10px', borderRadius: 20 }}>
                Đặt cược
              </div>
            </a>
          </Link>
        </div> */}
        </div>
      </Link>
    </div>
  );
};
