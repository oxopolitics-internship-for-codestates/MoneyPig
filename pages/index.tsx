import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import OnboardingDescription from '../components/OnboardingDescription/OnboardingDescription';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Economy Inside" />
      </Head>

      <div>여기는 온보딩 페이지 입니다</div>
      <OnboardingDescription
        description={'안녕하세요'}
        image={
          'http://res.heraldm.com/content/image/2015/01/19/20150119001097_0.jpg'
        }
        imgLocation={'right'}
      />
    </div>
  );
};

export default Home;
