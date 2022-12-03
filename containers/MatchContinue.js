import React from "react";
import Link from "next/link";
export default function MatchContinue(props) {
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
  return (
    <div>
      <Link href={`/chi-tiet-tran-dau/${data?.slug ?? ""}-${data?.id}`}>
        <div className="match-continue">
          <div className="match-header d-flex justify-space-between">
            <span className="match-leage">{league}</span>
            <Link target={"_blank"} href="https://www.7897890.vip/">
              <span className="bet-now">Cược ngay</span>
            </Link>
          </div>
          <div className="match-body d-flex justify-content-between justify-content-lg-around">
            <div className="team d-flex flex-column justify-content-center align-items-center">
              <picture>
                <img src={team_home_logo} alt={team_home_name} />
              </picture>
              <span className="team_name">{team_home_name}</span>
            </div>
            <div className="match_status d-flex flex-column justify-content-center">
              <div className="happening d-flex flex-column justify-content-center align-items-center">
                <span style={{ color: "#666", width: "90px", textAlign: "center", fontSize: "12px" }}>{time} </span>
                <p style={{ fontSize: "35px", lineHeight: "39px", color: "#666666", fontWeight: "600" }}>vs</p>
              </div>
            </div>
            <div className="team d-flex flex-column align-items-center">
              <picture>
                <img src={team_away_logo} alt={team_away_name} />
              </picture>
              <span className="team_name">{team_away_name}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
