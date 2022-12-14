import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import OxQuizCard from './OxQuizCard';
import { QuizType } from '../../../data/QuizList';
import { Timestamp } from 'firebase/firestore';

export default {
  title: 'Components/OxQuizCard',
  component: OxQuizCard,
} as ComponentMeta<typeof OxQuizCard>;

export const CardDafault: ComponentStory<typeof OxQuizCard> = () => (
  <OxQuizCard></OxQuizCard>
);
export const FourChoiceCardWithData: ComponentStory<typeof OxQuizCard> =
  args => <OxQuizCard {...args}></OxQuizCard>;

FourChoiceCardWithData.args = {
  quiz: {
    id: '1',
    title: '엔화에 대한 설명으로 옳은 것은?',
    userId: 'tmdqls2257',
    createdAt: Timestamp.now(),
    answer: 'O',
    time: 15,
    keyword: '엔화',
    type: QuizType.oxQuiz,
    description: '엔화는 일본의 화폐입니다.',
  },
};
