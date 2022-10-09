import React from 'react';
import Button from '../../Button/Button';

import QuizCard from '../QuizCard/QuizCard';

const OxQuizCard = () => {
  return (
    <QuizCard isOxCard={true}>
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
