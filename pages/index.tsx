import type { NextPage } from 'next';
import Head from 'next/head';
import OnboardingDescription from '../src/components/OnboardingDescription/OnboardingDescription';
import Footer from '../src/components/Footer/Footer';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Layout from '../src/components/Layout/Layout';

const Home: NextPageWithLayout = () => {
  return (
    <div className=" bg-grey">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Economy Inside" />
      </Head>

      {/* <div className="text-6xl text-center h-64 relative">
        <div className="absolute_center">경제 인사이드</div>
      </div> */}
      <OnboardingDescription
        description={'안녕하세요'}
        image={
          'http://res.heraldm.com/content/image/2015/01/19/20150119001097_0.jpg'
        }
        imgLocation={'right'}
      />
      <OnboardingDescription
        description={'2번째인데?'}
        image={
          'http://res.heraldm.com/content/image/2015/01/19/20150119001097_0.jpg'
        }
        imgLocation={'left'}
      />
      <OnboardingDescription
        description={'3번째인데?'}
        image={
          'http://res.heraldm.com/content/image/2015/01/19/20150119001097_0.jpg'
        }
        imgLocation={'right'}
      />
      <OnboardingDescription
        description={
          '길면 어떻게 될까어떻게 될까어떻게 될까어떻게 될까어떻게 될까어떻게 될까?'
        }
        image={
          'http://res.heraldm.com/content/image/2015/01/19/20150119001097_0.jpg'
        }
        imgLocation={'left'}
      />
      <Footer />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
