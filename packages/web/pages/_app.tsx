import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import Head from 'next/head';
import { GlobalTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/global';

import 'ress/dist/ress.min.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  /*
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = url => {
        console.log(url);
        // gtag.pageview(url);
      };
      Router.events.on('routeChangeComplete', handleRouteChange);
      return () => Router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, []);
  */

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Head>
        <title>KnzkLive</title>
        <meta
          name="description"
          content="No ads, Unlimited, Open-Source Live Streaming Service."
        />
      </Head>
      <GlobalStyle />
      <NextNprogress
        color={GlobalTheme.colors.text}
        height={4}
        options={{
          showSpinner: false
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
