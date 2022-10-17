import axios from 'axios';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import quizService from '../../service/QuizService';

import QuizListCard from '../../src/components/Card/QuizListCard/QuizListCard';
import { IconType } from '../../src/components/Icon/Icon';
import Input, {
  InputBoxTypeProps,
  InputTypeProps,
  TermProps,
} from '../../src/components/Input/Input';
import { Quiz } from '../../src/store/QuizStore';
import { classNameJoiner } from '../../utils/className';

// import { NextPageWithLayout } from '../_app';

type QuizPageProps = {
  quizes: Quiz[];
};
const QuizPage: NextPage<QuizPageProps> = observer(
  ({ quizes }: QuizPageProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isDropDownList, setIsDropDownList] = useState<boolean>(false);

    useEffect(() => {
      if (searchTerm === '') {
        setIsDropDownList(false);
      } else {
        quizes.filter(quiz => {
          return quiz.keyword.includes(searchTerm);
        });
      }
    }, [searchTerm]);

    const clickDropDownItem = (clickSearchTerm: string) => {
      setSearchTerm(clickSearchTerm);
      setIsDropDownList(false);
    };

    return (
      <section className="h-screen w-full flex flex-col justify-center space-y-12">
        <Input
          type={InputTypeProps.text}
          placeholder={'Search...'}
          style="w-full  py-3 mr-3 bg-[#E9E7E7]"
          iconList={[
            { style: 'w-12 h-12 p-3', iconName: IconType.search },
            { style: 'w-11 h-12 p-3', iconName: IconType.cancel },
          ]}
          inputBoxType={InputBoxTypeProps.search}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setIsDropDownList={setIsDropDownList}
        />
        <>
          {isDropDownList && (
            <>
              {quizes && quizes.length === 0 && (
                <div className="mt-4 px-12">
                  <span className="text-[#D61616]">
                    경제 사전에 없는 단어입니다
                  </span>
                </div>
              )}
              {quizes && quizes.length > 0 && (
                <ul
                  className={classNameJoiner(
                    quizes &&
                      quizes.length > 5 &&
                      'h-60 scrollbar overflow-y-scroll overflow-x-hidden',
                    'mt-2.5 bg-[#E9E7E7] border-2 border-[#CFCFCF] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
                  )}
                >
                  {quizes?.map(item => (
                    <li
                      key={String(item.id)}
                      className="px-11 py-3 rounded-[10px] hover:bg-[#5D5656] hover:text-[#ffffff]"
                      onClick={() => clickDropDownItem(item.keyword)}
                    >
                      {item.keyword}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </>

        <ul className="gap-4 w-full flex flex-col h-112 overflow-y-scroll scrollbarHide sm:flex-row sm:flex-wrap sm:justify-center ">
          {quizes.map((quiz, idx) => (
            <li key={idx} className={'sm:w-64'}>
              <QuizListCard quiz={quiz}></QuizListCard>
            </li>
          ))}
        </ul>
      </section>
    );
  },
);

export async function getServerSideProps() {
  try {
    const quizes = await quizService.getQuizes();
    return {
      props: { quizes }, // will be passed to the page component as props
    };
  } catch (err) {
    return {
      props: {}, // will be passed to the page component as props
    };
  }
}

export default QuizPage;
