import React from 'react';

import { classNameJoiner } from '../../../../utils/className';
import newQuiz from '../../../store/QuizStore';
import Timer from '../../Timer/Timer';
import Card from '../Card';

export enum resultType {
  correct = '정답입니다.',
  incorrect = '오답입니다.',
}

type QuizCardProps = {
  children?: React.ReactNode;
  isOxCard?: boolean;
  style?: string;
  quizTitle?: string;
  quizTime?: number;
  result?: resultType;
};

const QuizCard = ({
  children,
  isOxCard = false,
  quizTime,
  quizTitle,
  result,
}: QuizCardProps) => {
  const onBlurQuizTitle = (
    e: React.FocusEvent<HTMLTextAreaElement, Element>,
  ) => {
    const title = e.currentTarget.value;
    console.log(e.currentTarget.value);
    newQuiz.setTitle(title);
  };

  return (
    <Card style="space-y-4 h-128 max-w-sm m-auto">
      {quizTitle && <Timer quizTime={quizTime} />}
      <section className="h-64 space-y-6">
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
              onBlur={e => {
                onBlurQuizTitle(e);
              }}
            ></textarea>
          ) : (
            <h5 className={`max-w-full font-black break-words text-center`}>
              {result ? result : quizTitle}
            </h5>
          )}
        </Card>
        {children}
      </section>
    </Card>
  );
};

export default QuizCard;
