import type { NextPage } from 'next';
import Head from 'next/head';
import OnboardingDescription from '../src/components/OnboardingDescription/OnboardingDescription';
import Footer from '../src/components/Footer/Footer';
import { Image_Location_Position } from '../src/components/OnboardingDescription/OnboardingDescription';
import Slider from '../src/components/Slider/Slider';

const Home: NextPage = () => {
  return (
    <div className=" bg-grey left-0 top-0 w-full pt-96 space-y-96">
      <Head>
        <title>Home Page</title>
        {/* default */}
        <meta name="description" property="og:title" content="Economy Inside" />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-vector/man-expressing-his-ideas-for-diary_74855-6558.jpg?w=1380&t=st=1665823295~exp=1665823895~hmac=5013c081313cb0387ad43c8990d052a26c88d6a19ca27748de049216a73b5a7b"
        />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-vector/people-watching-breaking-news-on-the-phone_23-2148625435.jpg?t=st=1665824716~exp=1665825316~hmac=a79c909665d550c019a1d33690dff753d966981c494e99a2b4bc760a7693f7d7"
        />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-vector/happy-rich-banker-celebrating-income-growth_74855-5867.jpg?t=st=1665825107~exp=1665825707~hmac=077258a5cb1d45d8c7d2389360266c414d032a1884388c25791fc48b89dc4dc3"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneypig.vercel.app/" />
        <meta property="og:title" content="경제 퀴즈" />
        <meta
          property="og:description"
          content="경제 퀴즈를 풀 수 있는 사이트"
        />
        <meta property="og:site_name" content="Money Pig" />
        <meta property="og:locale" content="ko_KR" />
        {/* twitter */}
        <meta
          name="twitter:card"
          content="https://img.freepik.com/free-vector/man-expressing-his-ideas-for-diary_74855-6558.jpg?w=1380&t=st=1665823295~exp=1665823895~hmac=5013c081313cb0387ad43c8990d052a26c88d6a19ca27748de049216a73b5a7b"
        />
        <meta name="twitter:title" content="Economy Inside" />
        <meta
          name="twitter:description"
          content="경제 퀴즈를 풀 수 있는 사이트"
        />
        <meta
          name="twitter:image"
          content="https://img.freepik.com/free-vector/man-expressing-his-ideas-for-diary_74855-6558.jpg?w=1380&t=st=1665823295~exp=1665823895~hmac=5013c081313cb0387ad43c8990d052a26c88d6a19ca27748de049216a73b5a7b"
        />
      </Head>

      <OnboardingDescription
        description={'경제에 관련된 이야기 읽으면 머리 아프신가요?'}
        image={
          'https://img.freepik.com/free-vector/man-expressing-his-ideas-for-diary_74855-6558.jpg?w=1380&t=st=1665823295~exp=1665823895~hmac=5013c081313cb0387ad43c8990d052a26c88d6a19ca27748de049216a73b5a7b'
        }
        imgLocation={Image_Location_Position.RIGHT}
        width={300}
        height={300}
        alt={'머리가 아픈 이미지'}
      />
      <OnboardingDescription
        description={'경제 뉴스에 관련된 이야기 읽으면 머리 아프신가요?'}
        image={
          'https://img.freepik.com/free-vector/people-watching-breaking-news-on-the-phone_23-2148625435.jpg?t=st=1665824716~exp=1665825316~hmac=a79c909665d550c019a1d33690dff753d966981c494e99a2b4bc760a7693f7d7'
        }
        imgLocation={Image_Location_Position.LEFT}
        width={300}
        height={300}
        alt={'궁금해하는 이미지'}
      />
      <OnboardingDescription
        description={'경제를 알면 돈이 보입니다!'}
        image={
          'https://img.freepik.com/free-vector/happy-rich-banker-celebrating-income-growth_74855-5867.jpg?t=st=1665825107~exp=1665825707~hmac=077258a5cb1d45d8c7d2389360266c414d032a1884388c25791fc48b89dc4dc3'
        }
        imgLocation={Image_Location_Position.RIGHT}
        width={200}
        height={200}
        alt={'돈을 얻는 이미지'}
      />
      <div className=" h-20 text-center text-lg ">
        경제 문제로 경제에 대해서 공부하세요!
      </div>
      <div className=" w-full m-auto ">
        <Slider />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
