import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from '../src/components/Layout/Layout';
import Result from '../pages/quiz/result';
import { resultType } from '../src/components/Card/QuizCard/QuizCard';

export default {
  title: 'Pages/Result',
  component: Result,
} as ComponentMeta<typeof Result>;

export const ResultDefault: ComponentStory<typeof Result> = args => (
  <Layout>
    <Result {...args} />
  </Layout>
);
ResultDefault.args = {
  result: resultType.correct,
  description: '엔화는 일본의 화폐입니다.',
};
export const WrongQuizDefault: ComponentStory<typeof Result> = args => (
  <Layout>
    <Result {...args} />
  </Layout>
);
WrongQuizDefault.args = {
  result: resultType.incorrect,
  description: '엔화는 일본의 화폐입니다.',
};
