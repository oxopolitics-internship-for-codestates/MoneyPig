import React, { ReactElement, useEffect, useState, useCallback } from 'react';
import fsPromise from 'fs/promises';
import path from 'path';

import { NextPageWithLayout } from '../_app';
import Layout from '../../src/components/Layout/Layout';
import Input, {
  InputTypeProps,
  QuizProps,
} from '../../src/components/Input/Input';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'economyData.json');
  const jsonData = await fsPromise.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: { ...data },
  };
}

const Search: NextPageWithLayout = props => {
  const [term, setTerm] = useState<QuizProps[] | undefined>(
    Object.values(props),
  );

  return (
    <div className="min-w-[390px] bg-[#E9E7E7] px-10">
      <Input
        type={InputTypeProps.text}
        placeholder={'Search...'}
        term={term}
        setTerm={setTerm}
      />
    </div>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Search;
