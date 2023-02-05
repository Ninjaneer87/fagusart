import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import 'styles/style.scss';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Layout from '@/components/layout/Layout';
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "utils/createEmotionCache";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import themeOptions from "@/styles/theme/themeOptions";
import { useMounted } from 'hooks/useMounted';
import { SectionContextProvider } from 'context/sectionContext';

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();
const theme = responsiveFontSizes(createTheme(themeOptions));

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mounted] = useMounted();

  useEffect(() => {
    if (mounted) document.body.style.visibility = "visible";
  }, [mounted]);


  return <React.Fragment>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <SectionContextProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SectionContextProvider>
      </ThemeProvider>
    </CacheProvider>
  </React.Fragment>
}

export default MyApp;