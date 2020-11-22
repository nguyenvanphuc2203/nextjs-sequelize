import Head from 'next/head';
import { Provider } from 'react-redux';
import { createWrapper } from "next-redux-wrapper";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '../redux/store';

import Router from 'next/router';
import { getAppCookies, verifyToken, absoluteUrl } from '../middleware/utils';
import NProgress from 'nprogress';
import 'semantic-ui-css/semantic.min.css'

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', url => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}> 
      {/* fix SSR issue with PersistGate */}
        {() => (
          <>
            <Head>
              {/* Import CSS for nprogress */}
              <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            </Head>
            <Component {...pageProps} /> 
          </>
        )}
      </PersistGate>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const {
    store,
    isServer,
    req,
    query: { amp },
    asPath,
  } = ctx;

  let pageProps = Component.getInitialProps ? await Component.getInitialProps({ ctx }) : { asPath };

  return { pageProps };
};


const makeStore = () => store;
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp);

