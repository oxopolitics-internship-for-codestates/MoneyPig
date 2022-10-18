import React, { ReactElement, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { toJS } from 'mobx';
import Head from 'next/head';
import axios from 'axios';

import Footer from '../src/components/Footer/Footer';
import TimeOptionsSetting from '../src/components/TimeOptionsSetting/TimeOptionsSetting';
import Button from '../src/components/Button/Button';
import Modal from '../src/components/Modal/Modal';
import { classNameJoiner } from '../utils/className';
import Input, {
  InputBoxTypeProps,
  InputTypeProps,
  TermProps,
} from '../src/components/Input/Input';
import FourChoiceQuizCard from '../src/components/Card/FourChoiceQuizCard/FourChoiceQuizCard';
import OxQuizCard from '../src/components/Card/OxQuizCard/OxQuizCard';
import { QuizTime, QuizType } from '../src/data/QuizList';
import newQuiz, { Quiz } from '../src/store/QuizStore';
import { IconType } from '../src/components/Icon/Icon';
import quizService from '../service/QuizService';

const MakeAQuiz: NextPage = () => {
  const [quizPickModal, setQuizPickModal] = useState<boolean>(false);
  const [quizSelect, setQuizSelect] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [term, setTerm] = useState<TermProps[]>([]);
  const [isDropDownList, setIsDropDownList] = useState<boolean>(false);

  useEffect(() => {
    if (searchTerm === '') {
      setIsDropDownList(false);
      setTerm([]);
    } else {
      axios.get('./economyData.json').then(res => {
        const termList: TermProps[] = res.data;
        setTerm(
          termList.filter(({ term }) => {
            return term.includes(searchTerm);
          }),
        );
      });
    }
  }, [searchTerm]);

  const clickDropDownItem = (clickSearchTerm: string) => {
    setSearchTerm(clickSearchTerm);
    setIsDropDownList(false);
    newQuiz.setTitle(clickSearchTerm); //자동완성을 클릭해야지만 mobX에 들어감
  };

  const openQuizModal = () => {
    setQuizPickModal(prev => !prev);
  };

  const selectOneQuiz = () => {
    setQuizSelect(false);

    newQuiz.setType(QuizType.FourOptionQuiz);
  };

  const selectOXQuiz = () => {
    setQuizSelect(true);

    newQuiz.setType(QuizType.oxQuiz);
  };

  const onChangeAns = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (quizSelect) {
      if (e.target.value === '정답을 골라주세요') {
        newQuiz.setAnswer('');
      } else {
        newQuiz.setAnswer(e.target.value);
      }
    } else {
      if (e.target.value === '정답 번호를 선택해주세요') {
        newQuiz.setAnswer('');
      } else {
        newQuiz.setAnswer(e.target.value);
      }
    }
  };

  const onBlurDescription = (
    e: React.FocusEvent<HTMLTextAreaElement, Element>,
  ) => {
    const desc = e.currentTarget.value;
    newQuiz.setDescription(desc);
  };

  const onSubmit = () => {
    newQuiz.makeAQuiz;
    quizService.quizUpload(newQuiz.makeAQuiz);
  };

  return (
    <div className=" bg-grey">
      <Modal
        title="문제 유형 선택"
        modalState={quizPickModal}
        modalStateControl={setQuizPickModal}
      >
        <div className="flex md:mt-0 mt-16 md:flex md:items-center md:justify-between space-x-2 md:p-14">
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
            style="w-20 h-12 md:mt-0 mt-6 drop-shadow-lg"
          />
        </div>
      </Modal>
      <Head>
        <title>Making a quiz page</title>
        <meta name="description" content="Making a Quiz" />
      </Head>
      <div className=" w-4/5 m-auto">
        <div className="text-5xl h-20 p-4 ">키워드</div>
        <Input
          type={InputTypeProps.text}
          placeholder="키워드를 입력해주세요"
          inputBoxType={InputBoxTypeProps.search}
          style="w-full  py-3 mr-3 bg-[#E9E7E7]"
          iconList={[
            { style: 'w-12 h-12 p-3', iconName: IconType.search },
            { style: 'w-11 h-12 p-3', iconName: IconType.cancel },
          ]}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setIsDropDownList={setIsDropDownList}
        />
        <>
          {isDropDownList && (
            <>
              {term && term.length === 0 && (
                <div className="mt-4 px-12">
                  <span className="text-[#D61616]">
                    경제 사전에 없는 단어입니다
                  </span>
                </div>
              )}
              {term && term.length > 0 && (
                <ul
                  className={classNameJoiner(
                    term &&
                      term.length > 5 &&
                      'h-60 scrollbar overflow-y-scroll overflow-x-hidden',
                    'mt-4 bg-[#E9E7E7] border-2 border-[#CFCFCF] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
                  )}
                >
                  {term?.map(item => (
                    <li
                      key={String(item.Id)}
                      className="px-11 py-3 rounded-[10px] hover:bg-[#5D5656] hover:text-[#ffffff]"
                      onClick={() => clickDropDownItem(item.term)}
                    >
                      {item.term}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </>
        <div className="flex space-x-4 mt-6 w-full ">
          <div>
            <div className="text-5xl text-center my-2 w-40 ">시간</div>
            <TimeOptionsSetting />
          </div>
          <div>
            <div className="text-5xl text-center m-2 ">문제</div>
            <Button children="문제유형선택" onClick={openQuizModal} />
          </div>
        </div>
        <div className=" text-center m-10">
          {quizSelect ? <OxQuizCard /> : <FourChoiceQuizCard />}
        </div>
        <div className=" h-auto flex flex-col">
          {quizSelect ? (
            <>
              <label
                htmlFor="oxChoice"
                className="block text-5xl mb-2 font-medium text-gray-900"
              >
                정답
              </label>
              <select
                id="fourChoice"
                onChange={e => onChangeAns(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5  "
              >
                <option defaultValue="정답을 골라주세요">
                  정답을 골라주세요
                </option>
                <option value="O">O</option>
                <option value="X">X</option>
              </select>
            </>
          ) : (
            <>
              <label
                htmlFor="fourChoice"
                className="block text-5xl mb-2 font-medium text-gray-900"
              >
                정답
              </label>
              <select
                id="fourChoice"
                onChange={e => onChangeAns(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5  "
              >
                <option defaultValue="정답 번호를 선택해주세요">
                  정답 번호를 선택해주세요
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </>
          )}
          <div className="translate-y-2 h-36 flex border-2 rounded-[10px] bg-[#E9E7E7] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <textarea
              placeholder="설명을 입력해주세요"
              className="w-full outline-none py-3 mr-3 bg-[#E9E7E7]"
              onBlur={e => {
                onBlurDescription(e);
              }}
            />
          </div>
        </div>
        <div className=" text-center h-32">
          <Button
            style=" translate-y-16"
            children="문제 완성"
            onClick={onSubmit}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MakeAQuiz;
