import { useRouter } from 'next/router';
import React from 'react';
import { OxQuizModel } from '../../../data/QuizList';
import Button from '../../Button/Button';

import QuizCard, { resultType } from '../QuizCard/QuizCard';

type OxQuizCardProps = {
  quiz?: OxQuizModel;
};

const OxQuizCard = ({ quiz }: OxQuizCardProps) => {
  const router = useRouter();
  const onClickAns = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push({
      pathname: 'result',
      query: {
        result:
          quiz?.answer === e.currentTarget.value
            ? resultType.correct
            : resultType.incorrect,
        description: quiz?.description,
      },
    });
  };
  return (
    <QuizCard isOxCard={true} quizTitle={quiz?.title} quizTime={quiz?.time}>
      <div className="flex space-x-4">
        <Button
          bgColor="bg-brown"
          style="w-1/2 text-9xl"
          onClick={e => {
            onClickAns(e);
          }}
          value={'O'}
        >
          {'O'}
        </Button>
        <Button
          bgColor="bg-brown"
          style="w-1/2 text-9xl"
          onClick={e => {
            onClickAns(e);
          }}
          value={'X'}
        >
          {'X'}
        </Button>
      </div>
    </QuizCard>
  );
};

export default OxQuizCard;
