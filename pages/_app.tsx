import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Provider } from 'mobx-react';
import { QuizStore } from '../src/store/QuizStore';
import Layout from '../src/components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={QuizStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
