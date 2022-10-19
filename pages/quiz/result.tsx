import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Button, { LinkButton } from '../../src/components/Button/Button';
import { resultType } from '../../src/components/Card/QuizCard/QuizCard';
import ResultCard from '../../src/components/Card/ResultCard/ResultCard';

type ResultProps = {
  result: resultType;
  description: string;
};

const Result: NextPage<ResultProps> = ({
  result,
  description,
}: ResultProps) => {
  const router = useRouter();
  const onClickList = () => {
    router.push(`${process.env.NEXT_PUBLIC_CLIENT}quiz`);
  };

  return (
    <section className="h-screen space-y-28 flex flex-col justify-center ">
      <Head>
        <title>Economy Quiz Page</title>
        <meta
          name="description"
          property="og:title"
          content="Check the result"
        />
        <meta property="og:image" content="/Result.webp" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://moneypig.vercel.app/quiz/result"
        />
        <meta property="og:title" content="퀴즈의 결과 확인" />
        <meta
          property="og:description"
          content="당신이 푼 문제의 결과를 확인하세요."
        />
        <meta property="og:site_name" content="Money Pig Make" />
        <meta property="og:locale" content="ko_KR" />
        {/* twitter */}
        <meta name="twitter:card" content="/Result.webp" />
        <meta name="twitter:title" content="퀴즈의 결과 확인" />
        <meta
          name="twitter:description"
          content="당신이 푼 문제의 결과를 확인하세요."
        />
        <meta name="twitter:image" content="/Result.webp" />
      </Head>
      <ResultCard result={result} description={description} />
      <Button onClick={onClickList}>{'목록으로 가기'}</Button>
    </section>
  );
};

export async function getServerSideProps(context: {
  query: { result: resultType; description: string };
}) {
  try {
    const result = context.query.result;
    const description = context.query.description;
    return {
      props: { result, description }, // will be passed to the page component as props
    };
  } catch (err) {
    return {
      props: {}, // will be passed to the page component as props
    };
  }
}

export default Result;
