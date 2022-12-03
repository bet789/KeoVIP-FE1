import React from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Banner.css";
import "../styles/Homepage.css";
import "../styles/MatchCard.css";
import "../styles/PostCard.css";
import "../styles/Footer.css";
import "../styles/Schedulepage.css";
import "../styles/Highlightpage.css";
import "../styles/RankTable.css";
import "../styles/AboutUspage.css";
import "../styles/PostVideoCard.css";
import "../styles/MatchDetails.css";
import "../styles/LiveScore.css";
import "../styles/TyLeKeoPage.css";
import Script from 'next/script'
import { BannerFixed } from "../containers/BannerFixed";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
       <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-3EGD8YSNPF" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3EGD8YSNPF', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />

        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <BannerFixed />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
    </>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
