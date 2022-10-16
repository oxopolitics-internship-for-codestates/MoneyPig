import React, { ReactElement, useEffect, useState } from 'react';
import FourChoiceQuizCard from '../../src/components/Card/FourChoiceQuizCard/FourChoiceQuizCard';
import OxQuizCard from '../../src/components/Card/OxQuizCard/OxQuizCard';
import { FourOptionQuizModel, QuizType } from '../../src/data/QuizList';
import { useRouter } from 'next/router';
import quizService from '../../service/QuizService';
import { Timestamp } from 'firebase/firestore';
import { Quiz } from '../../src/store/QuizStore';
import { NextPageWithLayout } from '../_app';
import Layout from '../../src/components/Layout/Layout';

const QuizDetail: NextPageWithLayout = () => {
  const [quiz, setQuiz] = useState<Quiz>({
    id: '1',
    title: '엔화에 대한 설명으로 옳은 것을 하나 선택하시오',
    userId: 'tmdqls2257',
    createdAt: Timestamp.now(),
    answer: '',
    time: 15,
    keyword: '엔화',
    type: QuizType.FourOptionQuiz,
    description: '엔화는 일본의 화폐입니다.',
    options: ['', '', '', ''],
  });
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    async function test() {
      const getQuizOfFireStroe = await quizService.getQuiz(id as string);
      setQuiz(getQuizOfFireStroe);
    }
    test();
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center space-y-12">
      {quiz.type === QuizType.oxQuiz ? (
        <OxQuizCard quiz={quiz}></OxQuizCard>
      ) : (
        <FourChoiceQuizCard
          quiz={quiz as FourOptionQuizModel}
        ></FourChoiceQuizCard>
      )}
    </section>
  );
};

QuizDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default QuizDetail;
