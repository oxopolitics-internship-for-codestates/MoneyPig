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
    <Card style={'h-48 flex flex-col justify-between'}>
      <div>
        <div className="flex justify-between">
          <span>{createdAt(quiz.createdAt)}</span>
          <span>{quiz.keyword}</span>
        </div>
        {quiz.title.length > 20 ? (
          <h5 className="font-bold">{replaceContent(quiz.title)}</h5>
        ) : (
          <h5 className="font-bold">{quiz.title}</h5>
        )}
      </div>

      <span className="w-full flex flex-row-reverse">{quiz.userId}</span>
    </Card>
  );
};

export default QuizListCard;
