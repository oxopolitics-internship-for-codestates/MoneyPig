import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuizPage from '../pages/quiz';
import Layout from '../src/components/Layout/Layout';
import { Provider } from 'mobx-react';
import QuizStore from '../src/store/QuizStore';

export default {
  title: 'Pages/Quiz',
  component: QuizPage,
} as ComponentMeta<typeof QuizPage>;

export const MakeAQuizDefault: ComponentStory<typeof QuizPage> = () => (
  <Provider store={QuizStore}>
    <Layout>
      <QuizPage></QuizPage>
    </Layout>
  </Provider>
);
