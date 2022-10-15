import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuizDetail from '../pages/quiz/[id]';
import Layout from '../src/components/Layout/Layout';
import { QuizTime, QuizType } from '../src/data/QuizList';

export default {
  title: 'Pages/QuizDetail',
  component: QuizDetail,
} as ComponentMeta<typeof QuizDetail>;

export const OxCardWithData: ComponentStory<typeof QuizDetail> = args => (
  <Layout>
    <QuizDetail {...args}></QuizDetail>
  </Layout>
);

export const FourChoiceCardWithData: ComponentStory<typeof QuizDetail> =
  args => (
    <Layout>
      <QuizDetail {...args}></QuizDetail>
    </Layout>
  );

OxCardWithData.args = {
  quiz: {
    id: '1',
    title:
      '엔화에 대한 설명으로 옳은 것은?sdsdsdsdsdsdssadsdadasdasdasdasdsadasdasdasdasdasdasdasd엔화에 대한 설명으로 옳은 것은?sdsdsdsdsdsdssadsdadasdasdasdasdsadasdasdasdasdasdasdasd엔화에 대한 설명으로 옳은 것은?sdsdsdsdsdsdssadsdadasdasdasdasdsadasdasdasdasdasdasdasd엔화에 대한 설명으로 옳은 것은?sdsdsdsdsdsdssadsdadasdasdasdasdsadasdasdasdasdasdasdasd',
    userId: 'tmdqls2257',
    createdAt: 1665309414,
    answer: 'O',
    time: QuizTime.oneMin,
    keyword: '엔화',
    type: QuizType.oxQuiz,
    description: '엔화는 일본의 화폐입니다.',
  },
};

OxCardWithData.story = {
  parameters: {
    nextRouter: {
      path: '/blogs/[id]',
      asPath: '/blogs/lifeiscontent',
      query: {
        id: 'lifeiscontent',
        title: 'storybook title',
        content: 'storybook content',
      },
    },
  },
};

FourChoiceCardWithData.args = {
  quiz: {
    id: '1',
    title: '엔화에 대한 설명으로 옳은 것은?',
    userId: 'tmdqls2257',
    createdAt: 1665309414,
    options: ['일본의 화폐이다.', '미국의 화폐이다', '', ''],
    answer: '',
    time: QuizTime.oneMin,
    keyword: '엔화',
    type: QuizType.FourOptionQuiz,
    description: '엔화는 일본의 화폐입니다.',
  },
};
