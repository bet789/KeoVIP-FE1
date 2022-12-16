import React from "react";
import { ADS_BANNER, ADS_BANNER_BOTTOM, ADS_KEOVIP } from "../contants";

export default function Ads() {
  return (
    <div className="ads-keovip">
      <a href={ADS_KEOVIP} target="_blank">
        <div className="ads-left">
          <img src={ADS_BANNER} width="100px" height="400px" />
        </div>
        <div className="ads-right">
          <img src={ADS_BANNER} width="100px" height="400px" />
        </div>
        <div className="ads-bottom">
          <img src={ADS_BANNER_BOTTOM} width="400px" height="80px" />
        </div>
      </a>
    </div>
  );
}
