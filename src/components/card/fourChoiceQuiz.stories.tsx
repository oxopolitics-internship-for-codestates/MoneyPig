import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import FourChoiceQuizCard from './fourChoiceQuizCard';

export default {
  title: 'Components/FourChoiceQuizCard',
  component: FourChoiceQuizCard,
} as ComponentMeta<typeof FourChoiceQuizCard>;

export const CardDafault: ComponentStory<typeof FourChoiceQuizCard> = () => (
  <FourChoiceQuizCard></FourChoiceQuizCard>
);
