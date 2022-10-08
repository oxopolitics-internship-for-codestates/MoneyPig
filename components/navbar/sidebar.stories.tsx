import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from './sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const NavbarDefault: ComponentStory<typeof Sidebar> = args => (
  <Sidebar {...args} />
);
