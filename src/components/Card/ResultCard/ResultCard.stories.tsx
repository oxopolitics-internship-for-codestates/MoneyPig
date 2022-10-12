import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResultCard from './ResultCard';

export default {
  title: 'Components/ResultCard',
  component: ResultCard,
} as ComponentMeta<typeof ResultCard>;

export const ResultCardDefault: ComponentStory<typeof ResultCard> = args => (
  <ResultCard {...args} />
);
ResultCardDefault.args = {
  result: '정답입니다.',
  description: '엔화는 일본의 화폐입니다.',
};
