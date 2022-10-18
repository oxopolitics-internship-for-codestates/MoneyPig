import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Search from '../pages/search';
import Layout from '../src/components/Layout/Layout';

export default {
  title: 'Pages/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

export const SearchDefault: ComponentStory<typeof Search> = () => (
  <Layout>
    <Search />
  </Layout>
);
