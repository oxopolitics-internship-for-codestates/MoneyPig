import React from 'react';

import { classNameJoiner } from '../../../../utils/className';
import Timer from '../../Timer/Timer';
import Card from '../Card';

type QuizCardProps = {
  children?: React.ReactNode;
  isOxCard?: boolean;
  style?: string;
  quizTitle?: string;
  quizTime?: number;
  result?: string;
};

const QuizCard = ({
  children,
  isOxCard = false,
  quizTime,
  quizTitle,
  result,
}: QuizCardProps) => {
  return (
    <Card style="space-y-4 h-128 w-96 m-auto">
      {quizTitle && <Timer quizTime={quizTime} />}
      <form action="" className="h-64 space-y-6">
        <Card
          bgColor="bg-white"
          height={`${isOxCard ? 'h-60' : 'h-40'}`}
          style={`${
            !quizTitle && 'mt-8'
          } overflow-scroll scrollbarHide flex items-center`}
        >
          {!quizTitle && !result ? (
            <textarea
              className={classNameJoiner(
                `w-full h-full placeholder:text-center text-2xl placeholder:text-2xl ${
                  isOxCard
                    ? ' placeholder:leading-12'
                    : ' placeholder:leading-7'
                } resize-none`,
              )}
              placeholder="문제를 입력해주세요"
            ></textarea>
          ) : (
            <h5 className={`max-w-full  break-words text-center`}>
              {result ? result : quizTitle}
            </h5>
          )}
        </Card>
        {children}
      </form>
    </Card>
  );
};

export default QuizCard;
