import React from 'react';
import Card from '../Card';

type QuizCardProps = {
  children?: React.ReactNode;
};

const QuizCard = ({ children }: QuizCardProps) => {
  return (
    <Card style="space-y-4">
      <form action="" className="space-y-8">
        <Card bgColor="bg-white" height="h-fit">
          <textarea
            className="w-full h-28 placeholder:text-center placeholder:leading-7 resize-none "
            placeholder="문제를 입력해주세요"
          ></textarea>
        </Card>
        {children}
      </form>
    </Card>
  );
};

export default QuizCard;
