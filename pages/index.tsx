import type { NextPage } from 'next';
import Head from 'next/head';
import OnboardingDescription from '../src/components/OnboardingDescription/OnboardingDescription';
import Footer from '../src/components/Footer/Footer';
import { NextPageWithLayout } from './_app';
import { ReactElement, useEffect } from 'react';
import Layout from '../src/components/Layout/Layout';
import { Image_Location_Position } from '../src/components/OnboardingDescription/OnboardingDescription';
import fireStore from '../src/Firebase';

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    console.log(fireStore);
  });

  return (
    <div className=" bg-grey left-0 top-0">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Economy Inside" />
      </Head>

      <OnboardingDescription
        description={'안녕하세요'}
        image={
          'https://img.hani.co.kr/imgdb/original/2007/1227/68227042_20071227.jpg'
        }
        imgLocation={Image_Location_Position.RIGHT}
      />
      <OnboardingDescription
        description={'2번째인데?'}
        image={
          'http://res.heraldm.com/content/image/2015/01/19/20150119001097_0.jpg'
        }
        imgLocation={Image_Location_Position.LEFT}
      />
      <OnboardingDescription
        description={
          '길면 어떻게 될까어떻게 될까어떻게 될까어떻게 될까어떻게 될까어떻게 될까?'
        }
        image={
          'http://res.heraldm.com/content/image/2015/01/19/20150119001097_0.jpg'
        }
        imgLocation={Image_Location_Position.RIGHT}
      />
      <Footer />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
