import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { ip } from "../data/ip";
import axios from "../utility/axios";
import ReactJWPlayer from "react-jw-player";
// import ReactDOM from "react-dom";
import { urlAmination } from "../data/ip";
export default function LiveHome(props) {
  const { data } = props;
  const [promotionalVideo, setPromotionalVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [livestream, setLivestream] = useState([]);
  const [linkLivestream, setLinkLivestream] = useState("");
  const timerId = useRef();
  const [timer, setTimer] = useState(5);
  const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
  useEffect(() => {
    if (!Boolean(promotionalVideo) && !Boolean(timer)) {
      getLiveStream();
    }
  }, [promotionalVideo, timer]);

  useEffect(() => {
    if (data.id) {
      // getPromotionalVideo();
      getLiveStream(true);
    }
  }, [data.id]);

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

  const getPromotionalVideo = async () => {
    try {
      const res = await axios.get(`${ip}/website/setting/promotional-video`);
      if (res?.data?.data) {
        setPromotionalVideo(res.data.data);
        // setPlaying(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getLiveStream = async (isLiveStream) => {
    isLiveStream && setLivestream(data?.livestream ?? []);
    isLiveStream && setLinkLivestream((data?.livestream ?? [])?.[0]?.link ?? "");
  };

  const handlePromotionalVideoClick = async (url) => {
    url && window.open(url);
  };

  const handleReady = async () => {
    setTimeout(() => {
      setPlaying(true);
    }, 1000);
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
  // console.log(linkLivestream);
  const handleError = (e) => {
    setLinkLivestream("https://keovip.b-cdn.net/worldCup_2022.812323cc77452e7fc8171c31b25aad69.mp4");
  };
  return (
    <>
      {data.livestream.length > 0 ? (
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
            <a target="_blank" href="https://www.789betb.com/?uagt=livesbong1&path=signup">
              789BET
            </a>
            <a target="_blank" href="https://www.new88ww.com/?uagt=livesbong1&path=signup">
              NEW88
            </a>
            <a target="_blank" href="https://www.jun88h.com/?uagt=livesbong1&path=signup">
              Jun88
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
      {/* {Boolean(promotionalVideo) && (
        <>
          <ReactPlayer
            width="100%"
            height="100%"
            muted={isIOS}
            volume={1}
            playing={playing}
            url={promotionalVideo.filename}
            onReady={handleReady}
            playsinline
          />
          <div className="action-video" onClick={() => handlePromotionalVideoClick(promotionalVideo.url)} />
          {Boolean(timer) && (
            <div className="timeout" onClick={() => handlePromotionalVideoClick(promotionalVideo.url)}>
              Quảng cáo sau {timer}s
            </div>
          )}
          {!Boolean(timer) && (
            <div className="skip" onClick={() => setPromotionalVideo(null)}>
              Bỏ qua quảng cáo
            </div>
          )}
        </>
      )} */}
    </>
  );
}
