import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuizListCard from './QuizListCard';

export default {
  title: 'Components/QuizListCard',
  component: QuizListCard,
} as ComponentMeta<typeof QuizListCard>;

export const CardDafault: ComponentStory<typeof QuizListCard> = args => (
  <QuizListCard {...args} />
);

CardDafault.args = {
  quiz: {
    id: '1',
    title: '엔화에 대한 설명으로 옳은 것을 하나 선택하시오',
    userId: 'tmdqls2257',
    createdAt: 1665309414,
    answer: '',
    time: '15s',
    keyword: '엔화',
    type: 'FourOptionQuiz',
    description: '엔화는 일본의 화폐입니다.',
  },
};