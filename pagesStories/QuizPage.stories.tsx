import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Quiz from '../pages/quiz';
import Layout from '../src/components/Layout/Layout';

export default {
  title: 'Pages/Quiz',
  component: Quiz,
} as ComponentMeta<typeof Quiz>;

export const MakeAQuizDefault: ComponentStory<typeof Quiz> = () => (
  <Layout>
    <Quiz></Quiz>
  </Layout>
);
