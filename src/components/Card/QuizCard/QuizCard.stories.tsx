import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuizCard from './QuizCard';

export default {
  title: 'Components/QuizCard',
  component: QuizCard,
} as ComponentMeta<typeof QuizCard>;

export const CardDafault: ComponentStory<typeof QuizCard> = () => <QuizCard />;
