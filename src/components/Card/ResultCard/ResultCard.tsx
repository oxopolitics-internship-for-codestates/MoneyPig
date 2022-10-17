import React from 'react';
import Card from '../Card';
import QuizCard, { resultType } from '../QuizCard/QuizCard';

type ResultCardProps = {
  result: resultType;
  description: string;
};

const ResultCard = ({ result, description }: ResultCardProps) => {
  return (
    <QuizCard result={result}>
      <Card bgColor={'bg-white'} style="h-56">
        {description}
      </Card>
    </QuizCard>
  );
};

export default ResultCard;
