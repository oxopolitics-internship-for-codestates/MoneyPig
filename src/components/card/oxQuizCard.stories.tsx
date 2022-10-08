import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import OxQuizCard from './oxQuizCard';

export default {
  title: 'Components/OxQuizCard',
  component: OxQuizCard,
} as ComponentMeta<typeof OxQuizCard>;

export const CardDafault: ComponentStory<typeof OxQuizCard> = () => (
  <OxQuizCard></OxQuizCard>
);
