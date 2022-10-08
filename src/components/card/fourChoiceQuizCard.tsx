import React from 'react';
import Button from '../button/button';
import Card from './card';

const FourChoiceQuizCard = () => {
  return (
    <Card style="space-y-4">
      <form action="" className="space-y-8">
        <Card bgColor="bg-white" height="h-fit">
          <textarea
            className="w-full h-28 placeholder:text-center placeholder:leading-7 resize-none "
            placeholder="문제를 입력해주세요"
          ></textarea>
        </Card>
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
      </form>
    </Card>
  );
};

export default FourChoiceQuizCard;
