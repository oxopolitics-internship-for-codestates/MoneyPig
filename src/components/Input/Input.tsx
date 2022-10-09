import React, { useState, useRef } from 'react';

import Icon, { IconType } from '../Icon/Icon';

type InputProps = {
  type: 'text' | 'password' | 'number';
  placeholder: string;
  isReceived?: boolean;
};

const Input = ({
  type = 'text',
  placeholder,
  isReceived = undefined,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState<string>('');

  const onInputOnlyKorean = (e: React.FormEvent<HTMLInputElement>) => {
    const regexp = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    setKeyword(e.currentTarget.value.replace(regexp, ''));
  };

  const onReset = () => {
    setKeyword('');
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="flex border-2 rounded-[10px] bg-[#E9E7E7] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Icon style="w-12 h-12 p-3" iconName={IconType.search} />
        <input
          ref={inputRef}
          className="w-full outline-none py-3 mr-3 bg-[#E9E7E7]"
          type={type}
          placeholder={placeholder}
          value={keyword}
          onInput={onInputOnlyKorean}
        />
        <Icon
          style="w-11 h-12 p-3"
          iconName={IconType.cancel}
          onClick={onReset}
        />
      </div>
      {isReceived === false && (
        <div className="mt-4 px-12">
          <span className="text-[#D61616]">경제 사전에 없는 단어입니다</span>
        </div>
      )}
    </>
  );
};

export default Input;
