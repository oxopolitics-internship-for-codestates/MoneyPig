import React from 'react';
import { OxQuizModel } from '../../../data/QuizList';
import Button from '../../Button/Button';

import QuizCard from '../QuizCard/QuizCard';

type OxQuizCardProps = {
  quiz?: OxQuizModel;
};

const OxQuizCard = ({ quiz }: OxQuizCardProps) => {
  return (
    <QuizCard isOxCard={true} quizTitle={quiz?.title} quizTime={quiz?.time}>
      <div className="flex space-x-4">
        <Button bgColor="bg-brown" style="w-1/2 text-9xl">
          {'O'}
        </Button>
        <Button bgColor="bg-brown" style="w-1/2 text-9xl">
          {'X'}
        </Button>
      </div>
    </QuizCard>
  );
};

export default OxQuizCard;
