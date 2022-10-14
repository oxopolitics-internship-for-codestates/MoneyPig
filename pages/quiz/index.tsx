import React, { ReactElement } from 'react';
import QuizListCard from '../../src/components/Card/QuizListCard/QuizListCard';
import Input, { InputTypeProps } from '../../src/components/Input/Input';
import Layout from '../../src/components/Layout/Layout';
import { quizList, UnionQuiz } from '../../src/data/QuizList';
import { NextPageWithLayout } from '../_app';

const Quiz: NextPageWithLayout = () => {
  return (
    <section className="h-screen flex flex-col justify-center space-y-12">
      <Input type={InputTypeProps.text} placeholder="키워드를 입력해주세요" />

      <ul className="gap-4 w-full flex flex-col h-112 overflow-y-scroll scrollbarHide sm:flex-row sm:flex-wrap sm:justify-center ">
        {quizList.quizes.map((quiz, idx) => (
          <li key={idx} className={'sm:w-64'}>
            <QuizListCard quiz={quiz}></QuizListCard>
          </li>
        ))}
      </ul>
    </section>
  );
};
Quiz.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Quiz;
