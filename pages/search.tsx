import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Input, {
  InputBoxTypeProps,
  InputTypeProps,
  TermProps,
} from '../src/components/Input/Input';
import { IconType } from '../src/components/Icon/Icon';
import { classNameJoiner } from '../utils/className';
import KeywordDescriptionCard from '../src/components/KeywordDescriptionCard/KeywordDescriptionCard';
import EconomyData from '../public/economyData.json';

const Search: NextPage = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [term, setTerm] = useState<TermProps[]>([]);
  const [clickTerm, setClickTerm] = useState<TermProps[] | undefined>([]);
  const [isDropDownList, setIsDropDownList] = useState<boolean>(false);
  console.log(term);
  useEffect(() => {
    if (searchTerm === '') {
      setIsDropDownList(false);
      setTerm([]);
    } else {
      setTerm(
        EconomyData.filter(({ term }) => {
          return term.includes(searchTerm);
        }),
      );
    }
  }, [searchTerm]);

  const clickDropDownItem = (clickSearchTerm: string) => {
    setSearchTerm(clickSearchTerm);
    setClickTerm(
      term.filter(item => {
        return item.term === clickSearchTerm;
      }),
    );

    setIsDropDownList(false);
  };

  return (
    <div
      className={classNameJoiner(
        divRef.current && divRef.current?.clientHeight > 700 ? '' : 'h-screen',
        'relative w-full flex gap-4 flex-col items-center justify-center bg-[#E9E7E7] p-10',
      )}
    >
      <Head>
        <title>Economy Term Dictionary Page</title>
        <meta name="description" property="og:title" content="Making a Quiz" />
        <meta property="og:image" content="/Economic_term_search.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneypig.vercel.app/search" />
        <meta property="og:title" content="경제 용어를 찾을 수 있는 사이트" />
        <meta
          property="og:description"
          content="경제 용어를 찾을 수 있는 사이트"
        />
        <meta property="og:site_name" content="Money Pig Make" />
        <meta property="og:locale" content="ko_KR" />
        {/* twitter */}
        <meta name="twitter:card" content="/Economic_term_search.webp" />
        <meta name="twitter:title" content="경제 용어를 찾을 수 있는 사이트" />
        <meta
          name="twitter:description"
          content="경제 용어를 찾을 수 있는 사이트"
        />
        <meta name="twitter:image" content="/Economic_term_search.webp" />
      </Head>
      <div className="text-5xl h-20 p-4 text-center">경제 사전</div>
      <Input
        type={InputTypeProps.text}
        placeholder={'Search...'}
        style="w-full py-3 mr-3 bg-[#E9E7E7]"
        iconList={[
          { style: 'w-12 h-12 p-3', iconName: IconType.search },
          { style: 'w-11 h-12 p-3', iconName: IconType.cancel },
        ]}
        inputBoxType={InputBoxTypeProps.search}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setIsDropDownList={setIsDropDownList}
        setClickTerm={setClickTerm}
      />

      <div
        className={classNameJoiner(
          clickTerm?.length === 0 && 'h-32',
          'w-full relative',
        )}
      >
        {isDropDownList && (
          <>
            {term && term.length === 0 && (
              <div className="mt-4 px-11">
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
                  'w-full absolute z-10 bg-[#E9E7E7] border-2 border-[#CFCFCF] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
                )}
              >
                {term?.map(item => (
                  <li
                    key={String(item.Id)}
                    className=" px-4 py-3 rounded-[10px] hover:bg-[#5D5656] hover:text-[#ffffff]"
                    onClick={() => clickDropDownItem(item.term)}
                  >
                    {item.term}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <div ref={divRef} className="w-full">
        {clickTerm && (
          <KeywordDescriptionCard
            keyword={clickTerm[0]?.term}
            description={clickTerm[0]?.description}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
