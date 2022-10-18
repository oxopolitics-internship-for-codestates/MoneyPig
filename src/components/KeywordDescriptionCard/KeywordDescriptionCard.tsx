import Link from 'next/link';
import React from 'react';
import Card from '../Card/Card';
import Icon, { IconType } from '../Icon/Icon';

type KeywordDescriptionCardProps = {
  keyword?: string;
  description?: string;
};

const KeywordDescriptionCard = ({
  keyword,
  description,
}: KeywordDescriptionCardProps) => {
  return (
    <Card style="p-6 relative">
      <>
        {keyword && description && (
          <>
            <Link href={`/makeAQuiz?term=${keyword}`}>
              <a className="absolute py-2 px-4 top-6 right-12 rounded-full bg-[#5D5656] px- text-[#ffffff] text-center">
                퀴즈 만들기
              </a>
            </Link>
            <h3
              className="text-center p-4 mt-10"
              style={{ wordBreak: 'keep-all' }}
            >
              {keyword}
            </h3>
            <p className="p-6 leading-[32px]" style={{ wordBreak: 'keep-all' }}>
              {description}
            </p>
          </>
        )}
        {!keyword && !description && (
          <>
            <div className="flex items-center justify-center p-4 mt-10 h-20">
              <Icon
                iconName={IconType.search}
                style=" w-20 h-20 p-3 text-pink"
              />
            </div>
            <h4
              className=" text-center p-6 leading-[32px]"
              style={{ wordBreak: 'keep-all' }}
            >
              검색 결과가 없습니다
            </h4>
          </>
        )}
      </>
    </Card>
  );
};

export default KeywordDescriptionCard;
