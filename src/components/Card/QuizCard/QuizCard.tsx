import React from 'react';
import { classNameJoiner } from '../../../../utils/className';
import Card from '../Card';

type QuizCardProps = {
  children?: React.ReactNode;
  isOxCard?: boolean;
  style?: string;
  quizTitle?: string;
};

const QuizCard = ({ children, isOxCard = false, quizTitle }: QuizCardProps) => {
  return (
    <Card style="space-y-4 h-128">
      <form action="" className="space-y-8">
        <Card bgColor="bg-white" height="h-fit" style="">
          {!quizTitle ? (
            <textarea
              className={classNameJoiner(
                `w-full placeholder:text-center resize-none ${
                  isOxCard
                    ? 'h-48 placeholder:leading-12'
                    : 'h-28 placeholder:leading-7'
                }`,
              )}
              placeholder="문제를 입력해주세요"
            ></textarea>
          ) : (
            <h3 className="h-28 leading-7">{quizTitle}</h3>
          )}
        </Card>
        {children}
      </form>
    </Card>
  );
};

export default QuizCard;
