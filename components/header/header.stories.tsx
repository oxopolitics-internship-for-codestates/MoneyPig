import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const header: ComponentStory<typeof Header> = () => <Header />;
