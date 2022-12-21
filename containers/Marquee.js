import React from "react";
import { ADS_KEOVIP, URL_FB_KEOVIP } from "../contants";

export default function Marquee() {
  return (
    <>
      <div className="home-news">
        <div className="marquee-wrap news">
          <div className="visible-area">
            <div className="marquee-content scrollLeft">
              <span className="marquee-item" data-nosnippet="true">
                AE đam mê cá cược bóng đã hay tham gia cá cược tại Nhà Cái Uy Tín 789BET, Group FaceBook:
                <span style={{ color: "#ffba3f" }}>
                  <a target="_blank" href={URL_FB_KEOVIP}>
                    facebook.com/groups/keovip88
                  </a>
                </span>
                , Tele keovip:
                <span style={{ color: "#ffba3f" }}>
                  <a target="_blank" href={ADS_KEOVIP}>
                    t.me/keoviptv
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
