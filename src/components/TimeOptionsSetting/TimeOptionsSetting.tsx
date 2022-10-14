import React, { useState } from 'react';
import { classNameJoiner } from '../../../utils/className';

const TimeOptionsSetting = () => {
  const [dropDownState, setDropDownState] = useState<boolean>(false);
  const [timeText, setTimeText] = useState<string>('시간을 선택해주세요');

  const dropDownOpenFunction = () => {
    setDropDownState(prev => !prev);
  };

  const setTimePicker = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setTimeText(e.currentTarget.innerText);
  };

  return (
    <React.Fragment>
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
          ' z-10 w-40 fixed bg-white rounded-b-lg divide-y divide-gray-100 shadow dark:bg-gray-700',
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
          >
            5초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
          >
            10초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
          >
            15초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
          >
            30초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
          >
            60초
          </li>
          <li
            onClick={e => setTimePicker(e)}
            className="block py-2 px-4 cursor-pointer hover:bg-gray-100 "
          >
            무제한
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default TimeOptionsSetting;
