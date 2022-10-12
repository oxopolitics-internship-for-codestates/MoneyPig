import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../src/components/Footer/Footer';
import TimeOptionsSetting from '../src/components/TimeOptionsSetting/TimeOptionsSetting';
import Button from '../src/components/Button/Button';
import Modal from '../src/components/Modal/Modal';
import React, { ReactElement, useState } from 'react';
import { classNameJoiner } from '../utils/className';
import { NextPageWithLayout } from './_app';
import Layout from '../src/components/Layout/Layout';
import Input, { InputTypeProps } from '../src/components/Input/Input';

const MakeAQuiz: NextPageWithLayout = () => {
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
      <div className=" w-4/5 m-auto">
        <div className="text-5xl h-20 p-4 ">키워드</div>
        <Input type={InputTypeProps.text} placeholder="키워드를 입력해주세요" />
        <div className="flex space-x-4 mt-6 w-full ">
          <div>
            <div className="text-5xl text-center ">시간</div>
            <TimeOptionsSetting />
          </div>
          <div>
            <div className="text-5xl text-center ">문제</div>
            <Button children="문제유형 선택" onClick={openQuizModal} />
          </div>
        </div>
        <div className=" h-80 translate-y-12">문제 보여주는 칸</div>
        <div className=" h-auto flex flex-col">
          <div className="text-5xl p-4">정답</div>
          <div className="flex border-2 rounded-[10px] bg-[#E9E7E7] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <input
              placeholder="정답을 입력해주세요"
              className="w-full outline-none py-3 mr-3 bg-[#E9E7E7]"
            />
          </div>
          <div className="translate-y-2 h-36 flex border-2 rounded-[10px] bg-[#E9E7E7] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <textarea
              placeholder="설명을 입력해주세요"
              className="w-full outline-none py-3 mr-3 bg-[#E9E7E7]"
            />
          </div>
        </div>
        <div className=" text-center h-32">
          <Button style=" translate-y-16" children="문제 완성" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

MakeAQuiz.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MakeAQuiz;
