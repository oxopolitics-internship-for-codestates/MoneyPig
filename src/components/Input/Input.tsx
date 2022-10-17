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
  style: string;
  iconList?: IconListProps;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setIsDropDownList: Dispatch<SetStateAction<boolean>>;
  setClickTerm?: (term: TermProps[]) => void;
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
  setClickTerm,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    setIsDropDownList(true);
  };

  const onReset = () => {
    setSearchTerm('');
    setClickTerm && setClickTerm([]);
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
