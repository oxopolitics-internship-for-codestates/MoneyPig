import { NextPage } from 'next';
import React from 'react';
import { resultType } from '../../src/components/Card/QuizCard/QuizCard';
import ResultCard from '../../src/components/Card/ResultCard/ResultCard';

type ResultProps = {
  result: resultType;
  description: string;
};

const Result: NextPage<ResultProps> = ({
  result,
  description,
}: ResultProps) => {
  return (
    <section className="h-screen w-full flex flex-col justify-center space-y-12">
      <ResultCard result={result} description={description} />;
    </section>
  );
};

export async function getServerSideProps(context: {
  query: { result: resultType; description: string };
}) {
  try {
    const result = context.query.result;
    const description = context.query.description;
    return {
      props: { result, description }, // will be passed to the page component as props
    };
  } catch (err) {
    return {
      props: {}, // will be passed to the page component as props
    };
  }
}

export default Result;
