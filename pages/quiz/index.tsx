import {
  getFirestore,
  query,
  collection,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { observer } from 'mobx-react';
import React, { ReactElement, useEffect, useState } from 'react';
import quizService from '../../service/QuizService';

import QuizListCard from '../../src/components/Card/QuizListCard/QuizListCard';
import Input, { InputTypeProps } from '../../src/components/Input/Input';
import Layout from '../../src/components/Layout/Layout';
import { quizList, UnionQuiz } from '../../src/data/QuizList';
import { Quiz } from '../../src/store/QuizStore';

import { NextPageWithLayout } from '../_app';

const QuizPage: NextPageWithLayout = observer(() => {
  const [quizes, setQuizes] = useState<Quiz[]>([]);
  useEffect(() => {
    quizService.getQuizes(setQuizes);
  }, []);
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
});
QuizPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default QuizPage;
