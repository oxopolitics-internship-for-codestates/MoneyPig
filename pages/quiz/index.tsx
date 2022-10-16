import { observer } from 'mobx-react';
import { NextPage } from 'next';
import React from 'react';
import quizService from '../../service/QuizService';

import QuizListCard from '../../src/components/Card/QuizListCard/QuizListCard';
import Input, { InputTypeProps } from '../../src/components/Input/Input';
import { Quiz } from '../../src/store/QuizStore';

// import { NextPageWithLayout } from '../_app';

type QuizPageProps = {
  quizes: Quiz[];
};
const QuizPage: NextPage<QuizPageProps> = observer(
  ({ quizes }: QuizPageProps) => {
    return (
      <section className="h-screen flex flex-col justify-center space-y-12">
        {/* <Input type={InputTypeProps.text} placeholder="키워드를 입력해주세요" /> */}

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
