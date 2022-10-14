import React, { Dispatch, SetStateAction, useState } from 'react';
import { FourOptionQuizModel } from '../../../data/QuizList';
import QuizCard from '../QuizCard/QuizCard';
import { FourChoiceValue } from '../../../../pages/makeAQuiz';

type FourChoiceQuizCardProps = {
  quiz?: FourOptionQuizModel;
  fourInput?: FourChoiceValue;
  setFourInputs?: Dispatch<SetStateAction<FourChoiceValue>>;
};

const FourChoiceQuizCard = ({
  quiz,
  fourInput,
  setFourInputs,
}: FourChoiceQuizCardProps) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (setFourInputs && fourInput) {
      if (name === '1') {
        setFourInputs({
          ...fourInput,
          first: value,
        });
      } else if (name === '2') {
        setFourInputs({
          ...fourInput,
          second: value,
        });
      } else if (name === '3') {
        setFourInputs({
          ...fourInput,
          third: value,
        });
      } else if (name === '4') {
        setFourInputs({
          ...fourInput,
          fourth: value,
        });
      }
    }
  };
  return (
    <>
      {!quiz ? (
        <>
          {fourInput && (
            <QuizCard>
              <input
                onChange={e => onChangeInput(e)}
                value={fourInput.first}
                name="1"
                type="text"
                className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
                placeholder="선택지를 입력해주세요."
              />
              <input
                onChange={e => onChangeInput(e)}
                value={fourInput.second}
                name="2"
                type="text"
                className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
                placeholder="선택지를 입력해주세요."
              />
              <input
                onChange={e => onChangeInput(e)}
                value={fourInput.third}
                name="3"
                type="text"
                className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
                placeholder="선택지를 입력해주세요."
              />
              <input
                onChange={e => onChangeInput(e)}
                value={fourInput.fourth}
                name="4"
                type="text"
                className="w-full py-2 bg-brown text-grey placeholder:text-grey rounded-full text-center"
                placeholder="선택지를 입력해주세요."
              />
            </QuizCard>
          )}
        </>
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
