import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MakeAQuiz from '../pages/makeAQuiz';

export default {
  title: 'Pages/MakeAQuiz',
  component: MakeAQuiz,
} as ComponentMeta<typeof MakeAQuiz>;

export const MakeAQuizDefault: ComponentStory<typeof MakeAQuiz> = () => (
  <MakeAQuiz></MakeAQuiz>
);
