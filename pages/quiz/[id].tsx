import React, { ReactElement, useEffect, useState } from 'react';
import FourChoiceQuizCard from '../../src/components/Card/FourChoiceQuizCard/FourChoiceQuizCard';
import OxQuizCard from '../../src/components/Card/OxQuizCard/OxQuizCard';
import { FourOptionQuizModel, QuizType } from '../../src/data/QuizList';
import quizService from '../../service/QuizService';

import { Quiz } from '../../src/store/QuizStore';
import { NextPage } from 'next';

type QuizDetailProps = {
  quiz: Quiz;
};

const QuizDetail: NextPage<QuizDetailProps> = ({ quiz }: QuizDetailProps) => {
  return (
    <section className="h-screen flex flex-col justify-center space-y-12">
      {quiz.type === QuizType.oxQuiz ? (
        <OxQuizCard quiz={quiz}></OxQuizCard>
      ) : (
        <FourChoiceQuizCard
          quiz={quiz as FourOptionQuizModel}
        ></FourChoiceQuizCard>
      )}
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
