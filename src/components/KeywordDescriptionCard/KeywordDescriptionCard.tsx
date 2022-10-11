import Link from 'next/link';
import React from 'react';
import Card from '../Card/Card';

type keywordDescriptionCardProps = {
  keyword: string;
  description: string;
};

const KeywordDescriptionCard = ({
  keyword,
  description,
}: keywordDescriptionCardProps) => {
  return (
    <Card style="p-6 relative">
      <Link href={`/${keyword}`}>
        <a className="absolute py-2 px-4 top-6 right-12 rounded-full bg-[#5D5656] px- text-[#ffffff] text-center">
          퀴즈 만들기
        </a>
      </Link>
      <h3 className="text-center p-4 mt-10">{keyword}</h3>
      <p className="p-6 leading-[32px]">{description}</p>
    </Card>
  );
};

export default KeywordDescriptionCard;
