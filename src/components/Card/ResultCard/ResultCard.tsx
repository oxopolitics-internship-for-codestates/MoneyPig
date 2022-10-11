import React from 'react';
import Card from '../Card';
import QuizCard from '../QuizCard/QuizCard';

type ResultCardProps = {
  result: string;
  description: string;
};

const ResultCard = ({ result, description }: ResultCardProps) => {
  return (
    <QuizCard result={result}>
      <Card style="bg-white h-56">{description}</Card>
    </QuizCard>
  );
};

export default ResultCard;
