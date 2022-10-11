import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../src/components/Footer/Footer';
import TimeOptionsSetting from '../src/components/TimeOptionsSetting/TimeOptionsSetting';
import Button from '../src/components/Button/Button';
import Modal from '../src/components/Modal/Modal';
import React, { useState } from 'react';
import { classNameJoiner } from '../utils/className';
import Timer from '../src/components/Timer/Timer';

const MakeAQuiz: NextPage = () => {
  const [quizPickModal, setQuizPickModal] = useState<boolean>(false);
  const [quizSelect, setQuizSelect] = useState<boolean>(false);
  const openQuizModal = () => {
    setQuizPickModal(prev => !prev);
  };

  const selectOneQuiz = () => {
    setQuizSelect(false);
  };

  const selectOXQuiz = () => {
    setQuizSelect(true);
  };

  return (
    <div className=" bg-grey">
      <Modal
        title="문제 유형 선택"
        modalState={quizPickModal}
        modalStateControl={setQuizPickModal}
      >
        <div className="flex p-10 md:flex md:items-center md:justify-between space-x-2 md:p-14">
          <div
            onClick={selectOneQuiz}
            className={classNameJoiner(
              quizSelect ? 'bg-gray-200 hover:bg-gray-300 ' : ' bg-green-300',
              ' w-40 h-60 rounded-2xl cursor-pointer',
            )}
          >
            <div className=" w-3/4 bg-white drop-shadow-lg h-14 m-auto rounded-2xl translate-y-6 "></div>
            <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-12 "></div>
            <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-16 "></div>
            <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-20 "></div>
          </div>
          <div
            onClick={selectOXQuiz}
            className={classNameJoiner(
              quizSelect ? ' bg-green-400 ' : 'bg-gray-200 hover:bg-gray-300',
              ' w-40 h-60 rounded-2xl cursor-pointer ',
            )}
          >
            <div className=" w-3/4 bg-white drop-shadow-lg h-28 m-auto rounded-2xl translate-y-6 "></div>
            <div className="w-3/4 h-12 m-auto rounded-2xl translate-y-12 flex space-x-6">
              <div className=" w-2/5 bg-white h-12 rounded-2xl drop-shadow-lg "></div>
              <div className=" w-2/5 bg-white h-12 rounded-2xl drop-shadow-lg "></div>
            </div>
          </div>
        </div>
        <div className=" text-center translate-y-6 ">
          <Button
            onClick={openQuizModal}
            children="확인"
            style="w-20 h-12 drop-shadow-lg"
          />
        </div>
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

export default MakeAQuiz;
