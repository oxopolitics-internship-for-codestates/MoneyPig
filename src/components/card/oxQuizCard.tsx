import React from 'react';
import Card from './card';

const OxQuizCard = () => {
  return (
    <Card>
      <Card bgColor="bg-white" height="h-fit">
        <textarea
          className="w-full h-28 placeholder:text-center placeholder:leading-7 resize-none "
          placeholder="문제를 입력해주세요"
        ></textarea>
      </Card>
    </Card>
  );
};

export default OxQuizCard;
