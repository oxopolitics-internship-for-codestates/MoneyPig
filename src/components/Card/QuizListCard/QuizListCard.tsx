import { FieldValue, Timestamp } from 'firebase/firestore';
import router from 'next/router';
import React from 'react';
import { UnionQuiz } from '../../../data/QuizList';
import Card from '../Card';

type QuizListCardProps = {
  quiz: UnionQuiz;
};
type FirebaseCreateAtTimeStamp = { seconds: number; nanoseconds: number };

const QuizListCard = ({ quiz }: QuizListCardProps) => {
  const createdAt = (createdAt: FirebaseCreateAtTimeStamp) => {
    const res = new Date(createdAt.seconds * 1000);
    return res.toLocaleDateString().toString();
  };
  const replaceContent = (title: string) => {
    const summary = title.substring(0, 20);

    return summary + '...';
  };
  const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    // router.push(
    //   {
    //     pathname: `blogs/${quiz.id}`,
    //   },
    //   `blogs/${quiz.id}`,
    // );
    console.log(e);
  };
  return (
    <Card style={'h-48 sm:w-full space-y-8 cursor-pointer'} onClick={onClick}>
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
