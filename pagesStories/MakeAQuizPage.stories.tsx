import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MakeAQuiz from '../pages/makeAQuiz';
import Layout from '../src/components/Layout/Layout';

export default {
  title: 'Pages/MakeAQuiz',
  component: MakeAQuiz,
} as ComponentMeta<typeof MakeAQuiz>;

export const MakeAQuizDefault: ComponentStory<typeof MakeAQuiz> = () => (
  <Layout>
    <MakeAQuiz />
  </Layout>
);
