import React from 'react';
import QuizCard from '../QuizCard/QuizCard';

const FourChoiceQuizCard = () => {
  return (
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
  );
};

export default FourChoiceQuizCard;
