import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResultCard from './ResultCard';
import { resultType } from '../QuizCard/QuizCard';

export default {
  title: 'Components/ResultCard',
  component: ResultCard,
} as ComponentMeta<typeof ResultCard>;

export const ResultCardDefault: ComponentStory<typeof ResultCard> = args => (
  <ResultCard {...args} />
);
ResultCardDefault.args = {
  result: resultType.correct,
  description: '엔화는 일본의 화폐입니다.',
};
