import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from '../src/components/Layout/Layout';
import Result from '../pages/quiz/result';

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
  result: '정답입니다.',
  description: '엔화는 일본의 화폐입니다.',
};
export const WrongQuizDefault: ComponentStory<typeof Result> = args => (
  <Layout>
    <Result {...args} />
  </Layout>
);
WrongQuizDefault.args = {
  result: '틀렸습니다..',
  description: '엔화는 일본의 화폐입니다.',
};
