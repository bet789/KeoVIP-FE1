import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { URL_789BET, URL_GIF_LIVE } from "../contants";
import reverseString from "../utility/reverseString";

export const MatchCard2 = ({ data, getIdItemMatch, matchTheSports }) => {
  const {
    id,
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
  const getIdMatch = (id) => {
    if (!getIdItemMatch) return;
    getIdItemMatch(id);
  };
  return (
    <>
      <div className="card-border">
        {/* <Link href={`/chi-tiet-tran-dau/${data?.slug ?? ""}-${data?.id}`}> */}
        <div className="match_card text-light" onClick={() => getIdMatch(id)}>
          <div className="match_header d-flex justify-content-between">
            <span className="match_title">{league}</span>

            {commentator ? (
              <div class="living">
                <img src={URL_GIF_LIVE} height="11" width="20" />
                <span>Live</span>
              </div>
            ) : (
              ""
            )}
            <Link href={URL_789BET}>
              <a target="_blank">
                <span className="match_time" style={{ fontSize: "12px" }}>
                  Cược ngay
                </span>
              </a>
            </Link>
          </div>
          <div className="match_body d-flex justify-content-between justify-content-lg-around">
            <div className="team d-flex flex-column align-items-center">
              <picture>
                <img src={team_home_logo !== "undefined" ? team_home_logo : imgTmp} alt={team_home_name} />
              </picture>

              <span className="team_name">{team_home_name.slice(0, 16) ?? ""}</span>
            </div>
            <div className="match_status d-flex flex-column justify-content-center">
              <div className="happening d-flex flex-column justify-content-center align-items-center">
                {status !== "" ? null : (
                  <span className="match_time" style={{ fontSize: "12px" }}>
                    {time === "" ? "Chưa bắt đầu" : time}
                  </span>
                )}
                {commentator && (
                  <span
                    style={{
                      color: "#FEC006",
                      width: 90,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
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
                  <p style={{ fontSize: 22 }}>vs</p>
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
        </div>
      </div>
    </>
  );
};
