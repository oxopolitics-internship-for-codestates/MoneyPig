import React, { useState } from 'react';
import { classNameJoiner } from '../../../utils/className';
import { QuizTime } from '../../data/QuizList';
import newQuiz from '../../store/QuizStore';

const TimeOptionsSetting = () => {
  const [dropDownState, setDropDownState] = useState<boolean>(false);
  const [timeText, setTimeText] = useState<string>('시간을 선택해주세요');

  const dropDownOpenFunction = () => {
    setDropDownState(prev => !prev);
  };

  const setTimePicker = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setTimeText(e.currentTarget.innerText);
    newQuiz.setTime(e.currentTarget.value);
  };

  return (
    <div className=" absolute">
      <button
        onClick={dropDownOpenFunction}
        data-dropdown-toggle="dropdown"
        className={classNameJoiner(
          `${dropDownState ? 'rounded-t-lg' : 'rounded-lg'}`,
          ' text-gray-500 shadow bg-white w-40 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center hover:bg-gray-100',
        )}
        type="button"
      >
        {timeText}
      </button>
      <div
        className={classNameJoiner(
          `${dropDownState ? '' : 'hidden'}`,
          ' z-10 w-40 relative top-0 left-0 bg-white rounded-b-lg divide-y divide-gray-100 shadow dark:bg-gray-700',
        )}
      >
        <hr className="w-4/5 m-auto "></hr>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
            value={QuizTime.fiveSec}
          >
            5초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
            value={QuizTime.tenSec}
          >
            10초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
            value={QuizTime.fifteenSec}
          >
            15초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
            value={QuizTime.thirtySec}
          >
            30초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
            value={QuizTime.oneMin}
          >
            60초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
            value={QuizTime.infinite}
          >
            무제한
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimeOptionsSetting;
