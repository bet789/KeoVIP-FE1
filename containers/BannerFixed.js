import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { API } from "../contants";

export const BannerFixed = () => {
  const [banner, setBanner] = useState(undefined);
  const [visible, setVisible] = useState({
    bannerLeft: true,
    bannerCenter: true,
    bannerRight: true,
    bannerScrollLeft: true,
    bannerScrollRight: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const bannerCenter = banner?.find((d) => d.key === "banner-center") || undefined;
  const bannerLeft = banner?.find((d) => d.key === "banner-left") || undefined;
  const bannerRight = banner?.find((d) => d.key === "banner-right") || undefined;
  const bannerScrollLeft = banner?.find((d) => d.key === "banner-scroll-left") || undefined;
  const bannerScrollRight = banner?.find((d) => d.key === "banner-scroll-right") || undefined;
  const fetchData = async () => {
    const response = await axios.get(`${API}/website/setting/banner`);
    const data = response.data.data || [];
    if (data) {
      setBanner(data);
    }
  };

  return (
    <>
      <div className="row">
        {bannerScrollLeft && bannerScrollLeft.img && (
          <div className={`banner-scroll-left ${!visible.bannerScrollLeft ? "banner-hide" : ""}`}>
            <div className="banner-image-wrapper">
              {bannerScrollLeft.img && (
                <picture>
                  <img
                    src={bannerScrollLeft.img}
                    alt={bannerScrollLeft.key}
                    onClick={() => bannerScrollLeft.url && window.open(bannerScrollLeft.url || "#")}
                  />
                </picture>
              )}
              <div className="banner-button-close" onClick={() => setVisible({ ...visible, bannerScrollLeft: false })}>
                x
              </div>
            </div>
          </div>
        )}

        {bannerScrollRight && bannerScrollRight.img && (
          <div className={`banner-scroll-right ${!visible.bannerScrollRight ? "banner-hide" : ""}`}>
            <div className="banner-image-wrapper">
              {bannerScrollRight.img && (
                <picture>
                  <img
                    src={bannerScrollRight.img}
                    alt={bannerScrollRight.key}
                    onClick={() => bannerScrollRight.url && window.open(bannerScrollRight.url || "#")}
                  />
                </picture>
              )}
              <div className="banner-button-close" onClick={() => setVisible({ ...visible, bannerScrollRight: false })}>
                x
              </div>
            </div>
          </div>
        )}

        <div className="banner-bottom">
          {bannerLeft && bannerLeft.img && (
            <div className={`banner-left ${!visible.bannerLeft ? "banner-hide" : ""}`}>
              <div className="banner-image-wrapper">
                {bannerLeft.img && (
                  <Image
                    src={bannerLeft.img}
                    layout="fill"
                    className="banner-left"
                    alt="banner"
                    onClick={() => bannerLeft.url && window.open(bannerLeft.url || "#")}
                  />
                )}
                <div className="banner-button-close" onClick={() => setVisible({ ...visible, bannerLeft: false })}>
                  x
                </div>
              </div>
            </div>
          )}

          {bannerCenter && bannerCenter.img && (
            <div className={`banner-center ${!visible.bannerCenter ? "banner-hide" : ""}`}>
              <div className="banner-image-wrapper">
                {bannerCenter.img && (
                  <Image
                    src={bannerCenter.img}
                    layout="fill"
                    className="banner-center"
                    alt="banner"
                    onClick={() => bannerCenter.url && window.open(bannerCenter.url || "#")}
                  />
                )}
                <div className="banner-button-close" onClick={() => setVisible({ ...visible, bannerCenter: false })}>
                  x
                </div>
              </div>
            </div>
          )}

          {bannerRight && bannerRight.img && (
            <div className={`banner-right ${!visible.bannerRight ? "banner-hide" : ""}`}>
              <div className="banner-image-wrapper">
                {bannerRight.img && (
                  <Image
                    src={bannerRight.img}
                    layout="fill"
                    className="banner-right"
                    alt="banner"
                    onClick={() => bannerRight.url && window.open(bannerRight.url || "#")}
                  />
                )}
                <div className="banner-button-close" onClick={() => setVisible({ ...visible, bannerRight: false })}>
                  x
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
