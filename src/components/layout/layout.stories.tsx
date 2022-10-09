import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const Header: ComponentStory<typeof Layout> = () => <Layout />;
