import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { ip } from "../data/ip";
import axios from "../utility/axios";
import ReactJWPlayer from "react-jw-player";
import { urlAmination } from "../data/ip";
import SkLivetream from "./Skeleton/SkLivetream";
import { URL_789BET, URL_API_THESPORTS, URL_IFRAME_THESPORTS, URL_JUN88, URL_NEW88, URL_VIDEO } from "../contants";
import reverseString from "../utility/reverseString";
import { useMemo } from "react";
export default function LiveHome(props) {
  const { data } = props;
  const [promotionalVideo, setPromotionalVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [livestream, setLivestream] = useState([]);
  const [linkLivestream, setLinkLivestream] = useState("");
  const timerId = useRef();
  const [timer, setTimer] = useState(5);
  const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
  const [loading, setLoading] = useState(true);
  const [dataTheSports, setDataTheSports] = useState(null);
  const [dataTheSportsLive, setDataTheSportsLive] = useState(null);
  const matchID = reverseString(data.id.toString().slice(1, 8));

  const matchIdLive = useMemo(() => {
    return dataTheSportsLive?.filter((data) => dataTheSports?.thesports_uuid === data.match_id);
  }, [dataTheSports?.thesports_uuid]);
  useEffect(() => {
    if (!Boolean(promotionalVideo) && !Boolean(timer)) {
      getLiveStream();
    }
  }, [promotionalVideo, timer]);

  useEffect(() => {
    if (data.id) {
      // getPromotionalVideo();
      getLiveStream(true);
      getDataTheSports();
      getDataTheSportsLive();
    }
  }, [data.id]);
  const getDataTheSports = async () => {
    try {
      const res = await axios.get(URL_API_THESPORTS);
      if (res?.data?.data) {
        const dt = res.data.data;
        dt.map((item) => {
          if (item.match_id == matchID) {
            setDataTheSports(item);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getDataTheSportsLive = async () => {
    try {
      const res = await axios.get(`${URL_API_THESPORTS}/live`);
      if (res?.data?.data) {
        setDataTheSportsLive(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setInterval(() => {
      getLiveStream(false);
    }, 30000);
  }, [data.id]);

  useEffect(() => {
    if (Boolean(promotionalVideo) && playing) {
      if (timer <= 0) {
        clearInterval(timerId.current);
      }

      timerId.current = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1500);
    }

    return () => {
      clearInterval(timerId.current);
    };
  }, [timer, promotionalVideo, playing]);
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
            <a href={`/chi-tiet-tran-dau/${data?.slug ?? ""}-${data?.id}`}>
              <span>Vào Phòng Live</span>
            </a>
          </div>
          <div className="button-odd">
            <a href={`/chi-tiet-tran-dau/${data?.slug ?? ""}-${data?.id}`}>
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
          <iframe src={`${URL_IFRAME_THESPORTS}&uuid=${matchIdLive[0].match_id}`} width="100%" height="700"></iframe>
          <div className="button-live">
            <a href={`/chi-tiet-tran-dau/${data?.slug ?? ""}-${data?.id}`}>
              <span>Vào Phòng Live</span>
            </a>
          </div>
        </>
      ) : (
        <iframe
          src={`${urlAmination}?matchId=${data.id}&accessKey=tEFL6ClbFnfkvmEn0xspIVQyPV9jAz9u&lang=vi&statsPanel=hide`}
          width="100%"
          height="700"
        ></iframe>
      )}
    </>
  );
}
