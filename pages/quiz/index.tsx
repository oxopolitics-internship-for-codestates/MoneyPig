import React, { ReactElement } from 'react';
import QuizListCard from '../../src/components/Card/QuizListCard/QuizListCard';
import Layout from '../../src/components/Layout/Layout';
import { quizList, UnionQuiz } from '../../src/data/QuizList';
import { NextPageWithLayout } from '../_app';

const Quiz: NextPageWithLayout = () => {
  const firstColumnData: UnionQuiz[] = quizList.quizes.filter((quiz, idx) => {
    return !(idx % 2);
  });
  const secondColumnData: UnionQuiz[] = quizList.quizes.filter((quiz, idx) => {
    return idx % 2;
  });

  return (
    <div className="flex space-x-4">
      <ul className="space-y-4 w-full ">
        {firstColumnData.map((quiz, idx) => (
          <li key={idx}>
            <QuizListCard quiz={quiz}></QuizListCard>
          </li>
        ))}
      </ul>
      <ul className="space-y-4 w-full ">
        {secondColumnData.map((quiz, idx) => (
          <li key={idx}>
            <QuizListCard quiz={quiz}></QuizListCard>
          </li>
        ))}
      </ul>
      {/* <ul className="space-y-4 w-full ">
        {quizList.quizes.map((quiz, idx) => (
          <li key={idx}>
            <QuizListCard quiz={quiz}></QuizListCard>
          </li>
        ))}
      </ul>
      <ul className="space-y-4 w-full ">
        {quizList.quizes.map((quiz, idx) => (
          <li key={idx}>
            <QuizListCard quiz={quiz}></QuizListCard>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
Quiz.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Quiz;
