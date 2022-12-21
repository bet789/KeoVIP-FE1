import React, { useEffect, useRef, useState } from "react";
import ReactJWPlayer from "react-jw-player";
import SkLivetream from "./Skeleton/SkLivetream";
import { URL_789BET, URL_AMINATION, URL_IFRAME_THESPORTS, URL_JUN88, URL_NEW88, URL_VIDEO } from "../contants";
import reverseString from "../utility/reverseString";
import { useMemo } from "react";
import ReactPlayer from "react-player";
export default function LiveHome({ data, matchTheSportsLive, matchTheSports }) {
  const [livestream, setLivestream] = useState([]);
  const [linkLivestream, setLinkLivestream] = useState("");
  const [loading, setLoading] = useState(true);
  const matchID = reverseString(data?.id.toString().slice(1, 8));
  const matchIdTheSports = useMemo(() => {
    return matchTheSports.filter((data) => data.match_id == matchID);
  }, [matchID]);
  const matchIdLive = useMemo(() => {
    return matchTheSportsLive?.filter((data) => matchIdTheSports[0]?.thesports_uuid === data.match_id);
  }, [matchIdTheSports[0]?.thesports_uuid]);
  useEffect(() => {
    if (data.id) {
      getLiveStream(true);
    }
  }, [data.id]);

  const getLiveStream = async (isLiveStream) => {
    isLiveStream && setLivestream(data?.livestream ?? []);
    isLiveStream && setLinkLivestream((data?.livestream ?? [])?.[0]?.link ?? "");
    setLoading(false);
  };

  const onEnterFullScreen = () => {
    const myElement = `  <div class="button-odd2" id="odd2">
    <a href="/chi-tiet-tran-dau/${data?.slug ?? ""}-${data?.id}">
      <span>Vào Phòng Live</span>
    </a>
    <a target="_blank" href="https://www.789betb.com/?uagt=livesbong1&path=signup">
      789BET
    </a>
    <a target="_blank" href="https://www.new88ww.com/?uagt=livesbong1&path=signup">
      NEW88
    </a>
    <a target="_blank" href="https://www.jun88h.com/?uagt=livesbong1&path=signup">
      Jun88
    </a>
  </div>`;
    document.getElementById("livePlayer").insertAdjacentHTML("beforeend", myElement);
  };
  const handleError = (e) => {
    setLinkLivestream(URL_VIDEO);
  };
  return (
    <>
      {loading ? (
        <SkLivetream />
      ) : data.livestream.length > 0 ? (
        <>
          <ReactJWPlayer
            playerId="livePlayer"
            playerScript="https://cdn.jwplayer.com/libraries/m393TMt7.js"
            file={linkLivestream}
            onSeventyFivePercent={() => console.log("75 Percent")}
            onNinetyFivePercent={() => console.log("95 Percent")}
            onOneHundredPercent={() => console.log("100 Percent")}
            isAutoPlay={true}
            aspectRatio="16:9"
            onEnterFullScreen={() => onEnterFullScreen()}
            customProps={{
              playbackRateControls: [1, 1.25, 1.5],
              cast: {},
            }}
            onError={(e) => handleError(e)}
          />
          <div className="button-live">
            <a href={`/chi-tiet-tran-dau/${data?.slug ?? ""}${data?.id}`}>
              <span>Vào Phòng Live</span>
            </a>
          </div>
          <div className="button-odd">
            <a href={`/chi-tiet-tran-dau/${data?.slug ?? ""}${data?.id}`}>
              <span>Vào Phòng Live</span>
            </a>
            <a target="_blank" href={URL_789BET}>
              789BET
            </a>
            <a target="_blank" href={URL_NEW88}>
              NEW88
            </a>
            <a target="_blank" href={URL_JUN88}>
              Jun88
            </a>
          </div>
        </>
      ) : matchIdLive?.length > 0 ? (
        <>
          <iframe
            src={`${URL_IFRAME_THESPORTS}&uuid=${matchIdLive[0].match_id}`}
            width="100%"
            height="700"
            allowfullscreen="allowFullScreen"
          ></iframe>
          <div className="button-live">
            <a href={`/chi-tiet-tran-dau/${data?.slug ?? ""}${data?.id}`}>
              <span>Vào Phòng Live</span>
            </a>
          </div>
          <div className="button-odd">
            <a href={`/chi-tiet-tran-dau/${data?.slug ?? ""}${data?.id}`}>
              <span>Vào Phòng Live</span>
            </a>
            <a target="_blank" href={URL_789BET}>
              789BET
            </a>
            <a target="_blank" href={URL_NEW88}>
              NEW88
            </a>
            <a target="_blank" href={URL_JUN88}>
              Jun88
            </a>
          </div>
        </>
      ) : (
        <iframe
          src={`${URL_AMINATION}?matchId=${data.id}&accessKey=tEFL6ClbFnfkvmEn0xspIVQyPV9jAz9u&lang=vi&statsPanel=hide`}
          width="100%"
          height="700"
        ></iframe>
      )}
    </>
  );
}
