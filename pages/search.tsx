import React, { ReactElement, useEffect, useState } from 'react';

import { NextPageWithLayout } from './_app';
import Layout from '../src/components/Layout/Layout';
import InputUpdate, {
  InputBoxTypeProps,
  InputTypeProps,
  TermProps,
} from '../src/components/Input/Input';
import { IconType } from '../src/components/Icon/Icon';
import axios from 'axios';
import { classNameJoiner } from '../utils/className';

const Search: NextPageWithLayout = () => {
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
  };

  return (
    <div className="min-w-[390px] bg-[#E9E7E7] px-10">
      <InputUpdate
        type={InputTypeProps.text}
        placeholder={'Search...'}
        style="w-full  py-3 mr-3 bg-[#E9E7E7]"
        iconList={[
          { style: 'w-12 h-12 p-3', iconName: IconType.search },
          { style: 'w-11 h-12 p-3', iconName: IconType.cancel },
        ]}
        inputBoxType={InputBoxTypeProps.search}
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
                  'mt-2.5 bg-[#E9E7E7] border-2 border-[#CFCFCF] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
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
    </div>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Search;
