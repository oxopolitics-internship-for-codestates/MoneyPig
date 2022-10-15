import React, { Dispatch, SetStateAction, useState } from 'react';
import { FourOptionQuizModel } from '../../../data/QuizList';
import newQuiz from '../../../store/QuizStore';
import QuizCard from '../QuizCard/QuizCard';

type FourChoiceQuizCardProps = {
  quiz?: FourOptionQuizModel;
};

const FourChoiceQuizCard = ({ quiz }: FourChoiceQuizCardProps) => {
  const onBlurOptions = (
    e: React.FocusEvent<HTMLInputElement, Element>,
    index: number,
  ) => {
    newQuiz.setOptions(e.currentTarget.value, index);
  };

  return (
    <>
      {!quiz ? (
        <QuizCard>
          <input
            type="text"
            className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
            placeholder="선택지를 입력해주세요."
            onBlur={e => {
              onBlurOptions(e, 0);
            }}
          />
          <input
            type="text"
            className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
            placeholder="선택지를 입력해주세요."
            onBlur={e => {
              onBlurOptions(e, 1);
            }}
          />
          <input
            type="text"
            className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
            placeholder="선택지를 입력해주세요."
            onBlur={e => {
              onBlurOptions(e, 2);
            }}
          />
          <input
            type="text"
            className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
            placeholder="선택지를 입력해주세요."
            onBlur={e => {
              onBlurOptions(e, 3);
            }}
          />
        </QuizCard>
      ) : (
        <QuizCard quizTitle={quiz.title}>
          {quiz.options.map((option, namex) => (
            <button
              key={namex}
              className="w-full h-10 py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
            >
              {option}
            </button>
          ))}
        </QuizCard>
      )}
    </>
  );
};

export default FourChoiceQuizCard;
