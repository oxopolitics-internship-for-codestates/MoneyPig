import React from 'react';
import FourChoiceQuizCard from '../../src/components/Card/FourChoiceQuizCard/FourChoiceQuizCard';
import OxQuizCard from '../../src/components/Card/OxQuizCard/OxQuizCard';
import { FourOptionQuizModel, QuizType } from '../../src/data/QuizList';
import quizService from '../../service/QuizService';
import Button from '../../src/components/Button/Button';
import { useRouter } from 'next/router';

import { Quiz } from '../../src/store/QuizStore';
import { NextPage } from 'next';
import Head from 'next/head';

type QuizDetailProps = {
  quiz: Quiz;
};

const QuizDetail: NextPage<QuizDetailProps> = ({ quiz }: QuizDetailProps) => {
  const router = useRouter();
  const onClickList = () => {
    router.push(`${process.env.NEXT_PUBLIC_CLIENT}quiz`);
  };
  return (
    <section className="h-screen flex flex-col justify-center space-y-12">
      <Head>
        <title>Economy Quiz Page</title>
        <meta name="description" property="og:title" content="Solve A Quiz" />
        <meta property="og:image" content="/SolveAQuiz.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneypig.vercel.app/quiz" />
        <meta property="og:title" content="경제 퀴즈를 풀기" />
        <meta
          property="og:description"
          content="경제 퀴즈를 풀고 경제에 대해 알아가보세요."
        />
        <meta property="og:site_name" content="Money Pig Make" />
        <meta property="og:locale" content="ko_KR" />
        {/* twitter */}
        <meta name="twitter:card" content="/SolveAQuiz.webp" />
        <meta name="twitter:title" content="경제 퀴즈를 풀기" />
        <meta
          name="twitter:description"
          content="경제 퀴즈를 풀고 경제에 대해 알아가보세요."
        />
        <meta name="twitter:image" content="/SolveAQuiz.webp" />
      </Head>
      {quiz.type === QuizType.oxQuiz ? (
        <OxQuizCard quiz={quiz}></OxQuizCard>
      ) : (
        <FourChoiceQuizCard
          quiz={quiz as FourOptionQuizModel}
        ></FourChoiceQuizCard>
      )}
      <Button style="-translate-y-36" onClick={onClickList}>
        {'목록으로 가기'}
      </Button>
    </section>
  );
};

export async function getServerSideProps(context: { query: { id: string } }) {
  try {
    const quiz = await quizService.getQuiz(context.query.id);
    return {
      props: { quiz }, // will be passed to the page component as props
    };
  } catch (err) {
    return {
      props: {}, // will be passed to the page component as props
    };
  }
}

export default QuizDetail;
