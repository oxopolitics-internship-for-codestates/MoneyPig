import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Quiz from '../pages/quiz';
import Layout from '../src/components/Layout/Layout';
import { Provider } from 'mobx-react';
import QuizStore from '../src/store/QuizStore';

export default {
  title: 'Pages/Quiz',
  component: Quiz,
} as ComponentMeta<typeof Quiz>;

export const MakeAQuizDefault: ComponentStory<typeof Quiz> = () => (
  <Provider store={QuizStore}>
    <Layout>
      <Quiz></Quiz>
    </Layout>
  </Provider>
);
