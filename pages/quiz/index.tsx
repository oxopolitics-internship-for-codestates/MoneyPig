import { observer } from 'mobx-react';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import quizService from '../../service/QuizService';

import QuizListCard from '../../src/components/Card/QuizListCard/QuizListCard';
import { IconType } from '../../src/components/Icon/Icon';
import Input, {
  InputBoxTypeProps,
  InputTypeProps,
} from '../../src/components/Input/Input';
import { Quiz } from '../../src/store/QuizStore';
import { classNameJoiner } from '../../utils/className';

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
    }, [searchTerm, quizes]);

    const clickDropDownItem = (clickSearchTerm: string) => {
      setSearchTerm(clickSearchTerm);
      setIsDropDownList(false);
    };

    return (
      <section className="h-screen w-full flex flex-col justify-center space-y-12">
        <Head>
          <title>Economy Quiz Page</title>
          <meta name="description" property="og:title" content="Solve A Quiz" />
          <meta property="og:image" content="/ChoiceAQuiz.webp" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://moneypig.vercel.app/quiz" />
          <meta
            property="og:title"
            content="당신이 풀고 싶은 퀴즈를 선택하세요."
          />
          <meta
            property="og:description"
            content="당신이 풀고 싶은 퀴즈를 선택하여 풀 수 있습니다."
          />
          <meta property="og:site_name" content="Money Pig Make" />
          <meta property="og:locale" content="ko_KR" />
          {/* twitter */}
          <meta name="twitter:card" content="/ChoiceAQuiz.webp" />
          <meta
            name="twitter:title"
            content="당신이 풀고 싶은 퀴즈를 선택하세요."
          />
          <meta
            name="twitter:description"
            content="당신이 풀고 싶은 퀴즈를 선택하여 풀 수 있습니다."
          />
          <meta name="twitter:image" content="/ChoiceAQuiz.webp" />
        </Head>
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
