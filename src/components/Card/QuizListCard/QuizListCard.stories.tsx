import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuizListCard from './QuizListCard';
import { QuizType } from '../../../data/QuizList';
import { Timestamp } from 'firebase/firestore';

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
    createdAt: Timestamp.now(),
    answer: '',
    time: 15,
    keyword: '엔화',
    type: QuizType.FourOptionQuiz,
    description: '엔화는 일본의 화폐입니다.',
  },
};
