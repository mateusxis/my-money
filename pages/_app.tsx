import { AppProps } from 'next/app';
import Head from 'next/head';
import { FunctionComponent } from 'react';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>My Money</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
