import React from 'react';
import { classNameJoiner } from '../../../../utils/className';
import Timer from '../../Timer/Timer';
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
      {quizTitle && (
        <div className="relative">
          <div className="bg-grey w-full h-8 rounded-full"></div>
          <div
            className={`animation_linear bg-pink w-full h-8 rounded-full absolute top-0 `}
          ></div>
        </div>
      )}
      <form action="" className="h-64 space-y-6">
        <Card
          bgColor="bg-white"
          height="h-fit"
          style={`${!quizTitle && 'mt-8'}`}
        >
          {!quizTitle ? (
            <textarea
              className={classNameJoiner(
                `w-full placeholder:text-center text-2xl placeholder:text-2xl resize-none ${
                  isOxCard
                    ? 'h-48 placeholder:leading-12'
                    : 'h-28 placeholder:leading-7'
                }`,
              )}
              placeholder="문제를 입력해주세요"
            ></textarea>
          ) : (
            <h3
              className={`${isOxCard ? 'h-48 leading-12' : 'h-28 leading-7'}`}
            >
              {quizTitle}
            </h3>
          )}
        </Card>
        {children}
      </form>
    </Card>
  );
};

export default QuizCard;
