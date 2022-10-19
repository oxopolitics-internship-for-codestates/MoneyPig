import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const ModalBox: ComponentStory<typeof Modal> = () => {
  const [tempState, setTempState] = useState<boolean>(false);
  return (
    <Modal
      title="문제 유형 선택창"
      modalState={true}
      modalStateControl={setTempState}
    >
      <div className="flex p-10 md:flex md:items-center md:justify-between space-x-2 md:p-14">
        <div className=" w-40 h-60 bg-gray-200 hover:bg-gray-300 rounded-2xl cursor-pointer ">
          <div className=" w-3/4 bg-white drop-shadow-lg h-14 m-auto rounded-2xl translate-y-6 "></div>
          <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-12 "></div>
          <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-16 "></div>
          <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-20 "></div>
        </div>
        <div className=" w-40 h-60 bg-gray-200 hover:bg-gray-300 rounded-2xl cursor-pointer ">
          <div className=" w-3/4 bg-white drop-shadow-lg h-28 m-auto rounded-2xl translate-y-6 "></div>
          <div className="w-3/4 h-12 m-auto rounded-2xl translate-y-12 flex space-x-6">
            <div className=" w-2/5 bg-white h-12 rounded-2xl drop-shadow-lg "></div>
            <div className=" w-2/5 bg-white h-12 rounded-2xl drop-shadow-lg "></div>
          </div>
        </div>
      </div>
      <div className=" text-center translate-y-6 ">
        <Button style="w-20 h-12 drop-shadow-lg">확인</Button>
      </div>
    </Modal>
  );
};

export const FirstPick: ComponentStory<typeof Modal> = () => {
  const [tempState, setTempState] = useState<boolean>(false);
  return (
    <Modal
      title="문제 유형 선택창"
      modalState={true}
      modalStateControl={setTempState}
    >
      <div className="flex p-10 md:flex md:items-center md:justify-between space-x-2 md:p-14">
        <div className=" w-40 h-60 bg-green-300 rounded-2xl cursor-pointer ">
          <div className=" w-3/4 bg-white drop-shadow-lg h-14 m-auto rounded-2xl translate-y-6 "></div>
          <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-12 "></div>
          <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-16 "></div>
          <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-20 "></div>
        </div>
        <div className=" w-40 h-60 bg-gray-200 hover:bg-gray-300 rounded-2xl cursor-pointer ">
          <div className=" w-3/4 bg-white drop-shadow-lg h-28 m-auto rounded-2xl translate-y-6 "></div>
          <div className="w-3/4 h-12 m-auto rounded-2xl translate-y-12 flex space-x-6">
            <div className=" w-2/5 bg-white h-12 rounded-2xl drop-shadow-lg "></div>
            <div className=" w-2/5 bg-white h-12 rounded-2xl drop-shadow-lg "></div>
          </div>
        </div>
      </div>
      <div className=" text-center translate-y-6 ">
        <Button style="w-20 h-12 drop-shadow-lg">확인</Button>
      </div>
    </Modal>
  );
};

export const SecondPick: ComponentStory<typeof Modal> = () => {
  const [tempState, setTempState] = useState<boolean>(false);
  return (
    <Modal
      title="문제 유형 선택창"
      modalState={true}
      modalStateControl={setTempState}
    >
      <div className="flex p-10 md:flex md:items-center md:justify-between space-x-2 md:p-14">
        <div className=" w-40 h-60 bg-gray-200 hover:bg-gray-300 rounded-2xl cursor-pointer ">
          <div className=" w-3/4 bg-white drop-shadow-lg h-14 m-auto rounded-2xl translate-y-6 "></div>
          <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-12 "></div>
          <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-16 "></div>
          <div className=" w-3/4 bg-white drop-shadow-lg h-5 m-auto rounded-2xl translate-y-20 "></div>
        </div>
        <div className=" w-40 h-60 bg-green-300 rounded-2xl cursor-pointer ">
          <div className=" w-3/4 bg-white drop-shadow-lg h-28 m-auto rounded-2xl translate-y-6 "></div>
          <div className="w-3/4 h-12 m-auto rounded-2xl translate-y-12 flex space-x-6">
            <div className=" w-2/5 bg-white h-12 rounded-2xl drop-shadow-lg "></div>
            <div className=" w-2/5 bg-white h-12 rounded-2xl drop-shadow-lg "></div>
          </div>
        </div>
      </div>
      <div className=" text-center translate-y-6 ">
        <Button style="w-20 h-12 drop-shadow-lg">확인</Button>
      </div>
    </Modal>
  );
};
