import React, { useRef, Dispatch, SetStateAction, ChangeEvent } from 'react';

import { classNameJoiner } from '../../../utils/className';
import Icon, { IconType } from '../Icon/Icon';

export type TermProps = {
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

export enum InputBoxTypeProps {
  default = 'default',
  search = 'search',
}

type InputProps = {
  type: InputTypeProps;
  inputBoxType: InputBoxTypeProps;
  placeholder: string;
<<<<<<< HEAD
  style: string;
  iconList?: IconListProps;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setIsDropDownList: Dispatch<SetStateAction<boolean>>;
=======
  term?: QuizProps[] | [];
  setTerm?: React.Dispatch<React.SetStateAction<QuizProps[] | undefined>>;
>>>>>>> e714d44659f792fe28a83984e866d712589efea6
};

type IconListProps = {
  style: string;
  iconName: IconType;
}[];

const Input = ({
  type = InputTypeProps.text,
  inputBoxType = InputBoxTypeProps.search,
  placeholder,
  style,
  iconList,
  searchTerm,
  setSearchTerm,
  setIsDropDownList,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    setIsDropDownList(true);
  };

  const onReset = () => {
    setSearchTerm('');
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="flex border-2 border-[#CFCFCF] rounded-[10px] bg-[#E9E7E7] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        {inputBoxType === 'search' && iconList && (
          <>
            <Icon style={iconList[0].style} iconName={iconList[0].iconName} />
            <input
              className={classNameJoiner(style, 'outline-none')}
              type={type}
              placeholder={placeholder}
              value={searchTerm}
              onChange={onSearchTermChange}
            />
            <Icon
              style={iconList[1].style}
              iconName={iconList[1].iconName}
              onClick={onReset}
            />
          </>
        )}
        {inputBoxType === 'default' && (
          <input
            className={classNameJoiner(style, 'outline-none')}
            type={type}
            placeholder={placeholder}
            onChange={onSearchTermChange}
          />
        )}
      </div>
    </>
  );
};

export default Input;
