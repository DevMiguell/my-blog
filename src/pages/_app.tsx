import Head from "next/head";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/globals";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My Blog</title>
      </Head>

      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
