import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SidebarItem from './sidebarItem';

export default {
  title: 'Components/SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

export const SidebarItemDefault: ComponentStory<typeof SidebarItem> = () => (
  <SidebarItem>{'Home'}</SidebarItem>
);
