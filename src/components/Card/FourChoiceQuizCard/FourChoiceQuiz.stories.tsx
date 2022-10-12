import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import FourChoiceQuizCard from './FourChoiceQuizCard';
import { QuizType } from '../../../data/QuizList';

export default {
  title: 'Components/FourChoiceQuizCard',
  component: FourChoiceQuizCard,
} as ComponentMeta<typeof FourChoiceQuizCard>;

export const FourChoiceCardDefault: ComponentStory<typeof FourChoiceQuizCard> =
  () => <FourChoiceQuizCard></FourChoiceQuizCard>;

export const FourChoiceCardWithData: ComponentStory<typeof FourChoiceQuizCard> =
  args => <FourChoiceQuizCard {...args}></FourChoiceQuizCard>;

FourChoiceCardWithData.args = {
  quiz: {
    id: '1',
    title: '엔화에 대한 설명으로 옳은 것은?',
    userId: 'tmdqls2257',
    createdAt: 1665309414,
    options: ['일본의 화폐이다.', '미국의 화폐이다', '', ''],
    answer: '',
    time: 60,
    keyword: '엔화',
    type: QuizType.FourOptionQuiz,
    description: '엔화는 일본의 화폐입니다.',
  },
};
