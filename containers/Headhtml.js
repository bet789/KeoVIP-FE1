import React from "react";
import Head from "next/head";

export default function Headhtml(props) {
  const { data } = props;
  return (
    <Head>
      <title>{data?.title ?? "Keovip.tv - Trực tiếp bóng đá miễn phí"}</title>
      <meta
        name="description"
        content={`${
          data?.seo_description ??
          "Trang web tổng hợp đầy đủ các trận trực tiếp bóng đá Quốc tế, Việt Nam nhanh chóng và chất lượng nhất."
        }`}
      ></meta>
      <link href="https://fonts.googleapis.com/css?family=Josefin Sans" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Open Sans" rel="stylesheet"></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/lato-font/3.0.0/css/lato-font.min.css"
        integrity="sha512-rSWTr6dChYCbhpHaT1hg2tf4re2jUxBWTuZbujxKg96+T87KQJriMzBzW5aqcb8jmzBhhNSx4XYGA6/Y+ok1vQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
        integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc"
        crossOrigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      ></link>
    </Head>
  );
}
