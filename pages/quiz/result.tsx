import React from 'react';
import ResultCard from '../../src/components/Card/ResultCard/ResultCard';

type RsultProps = {
  result: string;
  description: string;
};

const Result = ({ result, description }: RsultProps) => {
  return <ResultCard result={result} description={description} />;
};

export default Result;
