import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from '../pages';
import Layout from '../src/components/Layout/Layout';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomeDefault: ComponentStory<typeof Home> = () => (
  <Layout>
    <Home />
  </Layout>
);
