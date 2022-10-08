import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavbarItem from './navbarItem';

export default {
  title: 'Components/NavbarItem',
  component: NavbarItem,
} as ComponentMeta<typeof NavbarItem>;

export const NavbarItemDefault: ComponentStory<typeof NavbarItem> = () => (
  <NavbarItem>{'Home'}</NavbarItem>
);
