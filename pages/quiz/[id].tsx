import { type } from 'os';
import React from 'react';
import FourChoiceQuizCard from '../../src/components/Card/FourChoiceQuizCard/FourChoiceQuizCard';
import OxQuizCard from '../../src/components/Card/OxQuizCard/OxQuizCard';
import { FourOptionQuizModel, unionQuiz } from '../../src/data/QuizList';

type QuizDetailProps = {
  quiz: unionQuiz;
};

const QuizDetail = ({ quiz }: QuizDetailProps) => {
  const rending = () => {
    return quiz.type === 'OxQuiz' ? (
      <OxQuizCard quiz={quiz}></OxQuizCard>
    ) : (
      <FourChoiceQuizCard
        quiz={quiz as FourOptionQuizModel}
      ></FourChoiceQuizCard>
    );
  };
  return rending();
};

export default QuizDetail;
