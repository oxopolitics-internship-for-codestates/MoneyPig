import React, { useState, useRef, useEffect } from 'react';
import { classNameJoiner } from '../../../utils/className';

import Icon, { IconType } from '../Icon/Icon';

export type QuizProps = {
  Id: number;
  keyword: string;
  term: string;
  description: string;
};
export enum InputTypeProps {
  text = 'text',
  password = 'password',
  number = 'number',
}

type InputProps = {
  type: InputTypeProps;
  placeholder: string;
  term?: QuizProps[] | [];
  setTerm: React.Dispatch<React.SetStateAction<QuizProps[] | undefined>>;
};

const Input = ({ type, placeholder, term, setTerm }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  const [isDropDownList, setIsDropDownList] = useState<boolean>(false);
  const [filterQuiz, setFilterQuiz] = useState<QuizProps[] | undefined>(term);

  const showDropDownList = () => {
    if (searchKeyWord === '') {
      setIsDropDownList(false);
      setFilterQuiz([]);
    } else {
      const updateQuiz = term?.filter(termList => {
        return termList.term.includes(searchKeyWord);
      });
      setFilterQuiz(updateQuiz);
    }
  };

  const onSearchKeyWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(e.currentTarget.value);
    setIsDropDownList(true);
  };

  const clickDropDownItem = (clickedKeyWord: string) => {
    setSearchKeyWord(clickedKeyWord);
    setIsDropDownList(false);
  };

  const onReset = () => {
    setSearchKeyWord('');
    inputRef.current?.focus();
  };

  useEffect(showDropDownList, [searchKeyWord, term]);

  return (
    <>
      <div className="flex border-2 border-[#CFCFCF] rounded-[10px] bg-[#E9E7E7] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Icon style="w-12 h-12 p-3" iconName={IconType.search} />
        <input
          ref={inputRef}
          className="w-full outline-none py-3 mr-3 bg-[#E9E7E7]"
          type={type}
          placeholder={placeholder}
          value={searchKeyWord}
          onChange={onSearchKeyWordChange}
        />
        <Icon
          style="w-11 h-12 p-3"
          iconName={IconType.cancel}
          onClick={onReset}
        />
      </div>

      <>
        {isDropDownList && (
          <>
            {filterQuiz && filterQuiz.length === 0 && (
              <div className="mt-4 px-12">
                <span className="text-[#D61616]">
                  경제 사전에 없는 단어입니다
                </span>
              </div>
            )}
            {filterQuiz && filterQuiz.length > 0 && (
              <ul
                className={classNameJoiner(
                  filterQuiz &&
                    filterQuiz.length > 5 &&
                    'h-60 scrollbar overflow-y-scroll overflow-x-hidden',
                  'mt-2.5 bg-[#E9E7E7] border-2 border-[#CFCFCF] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
                )}
              >
                {filterQuiz?.map(item => (
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
    </>
  );
};

export default Input;
