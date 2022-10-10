import React from 'react';
import { unionQuiz } from '../../../data/QuizList';
import Card from '../Card';

type QuizListCardProps = {
  quiz: unionQuiz;
};

const QuizListCard = ({ quiz }: QuizListCardProps) => {
  const createdAt = (createdAt: number) => {
    const res = new Date(createdAt * 1000);
    return res.toLocaleDateString().toString();
  };
  const replaceContent = (title: string) => {
    const summary = title.substring(0, 20);

    return summary + '...';
  };
  return (
    <Card style={'h-48 space-y-8'}>
      <div className="flex justify-between">
        <span>{createdAt(quiz.createdAt)}</span>
        <span>{quiz.userId}</span>
      </div>
      {/* block h-28 leading-7  */}
      <h5 className="font-bold m-auto">
        {quiz.title.length > 20 ? replaceContent(quiz.title) : quiz.title}
      </h5>
    </Card>
  );
};

export default QuizListCard;
