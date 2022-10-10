import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResultCard from './ResultCard';

export default {
  title: 'Components/ResultCard',
  component: ResultCard,
} as ComponentMeta<typeof ResultCard>;

export const ResultCardDefault: ComponentStory<typeof ResultCard> = () => (
  <ResultCard />
);
