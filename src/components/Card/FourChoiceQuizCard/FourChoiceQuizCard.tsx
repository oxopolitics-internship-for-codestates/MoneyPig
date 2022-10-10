import React from 'react';
import { FourOptionQuizModel } from '../../../data/QuizList';
import QuizCard from '../QuizCard/QuizCard';

type FourChoiceQuizCardProps = {
  quiz?: FourOptionQuizModel;
};

const FourChoiceQuizCard = ({ quiz }: FourChoiceQuizCardProps) => {
  return (
    <>
      {!quiz ? (
        <QuizCard>
          <input
            type="text"
            className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
            placeholder="선택지를 입력해주세요."
          />
          <input
            type="text"
            className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
            placeholder="선택지를 입력해주세요."
          />
          <input
            type="text"
            className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
            placeholder="선택지를 입력해주세요."
          />
          <input
            type="text"
            className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
            placeholder="선택지를 입력해주세요."
          />
        </QuizCard>
      ) : (
        <QuizCard quizTitle={quiz.title}>
          {quiz.options.map((option, idx) => (
            <button
              key={idx}
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
