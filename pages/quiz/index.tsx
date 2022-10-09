import React, { ReactElement } from 'react';
import QuizListCard from '../../src/components/Card/QuizListCard/QuizListCard';
import Layout from '../../src/components/Layout/Layout';
import { quizList } from '../../src/data/QuizList';
import { NextPageWithLayout } from '../_app';

const Quiz: NextPageWithLayout = () => {
  return (
    <ul>
      {quizList.quizes.map((quiz, idx) => (
        <li key={idx}>
          <QuizListCard quiz={quiz}></QuizListCard>
        </li>
      ))}
    </ul>
  );
};
Quiz.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Quiz;
