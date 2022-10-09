import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../src/components/Footer/Footer';
import TimeOptionsSetting from '../src/components/TimeOptionsSetting/TimeOptionsSetting';
import Button from '../src/components/Button/Button';
import Modal from '../src/components/Modal/Modal';
import React, { useState } from 'react';

const makeAQuiz: NextPage = () => {
  const [quizPickModal, setQuizPickModal] = useState<boolean>(false);
  const openQuizModal = () => {
    setQuizPickModal(prev => !prev);
  };

  return (
    <div className=" bg-grey">
      <Modal modalState={quizPickModal} modalStateControl={setQuizPickModal}>
        <div>안뇽</div>
      </Modal>
      <Head>
        <title>Making a quiz page</title>
        <meta name="description" content="Making a Quiz" />
      </Head>
      <div className="text-5xl">키워드</div>
      <div className="text-5xl">시간</div>
      <TimeOptionsSetting />
      <div className="text-5xl">문제</div>
      <Button onClick={openQuizModal} />
      <div className="text-5xl">정답</div>

      <Footer />
    </div>
  );
};

export default makeAQuiz;
