import React, { ReactElement, useState } from 'react';

import { NextPageWithLayout } from './_app';
import Layout from '../src/components/Layout/Layout';
import Input, {
  InputTypeProps,
  QuizProps,
} from '../src/components/Input/Input';

const Search: NextPageWithLayout = () => {
  const [term, setTerm] = useState<QuizProps[]>([]);

  const onResultChange = (resultTerm: QuizProps[]) => {
    setTerm(resultTerm);
  };

  return (
    <div className="min-w-[390px] bg-[#E9E7E7] px-10">
      <Input
        type={InputTypeProps.text}
        placeholder={'Search...'}
        term={term}
        setTerm={onResultChange}
      />
    </div>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Search;
