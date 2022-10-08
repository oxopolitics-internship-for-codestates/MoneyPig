import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from './navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const NavbarDefault: ComponentStory<typeof Navbar> = () => <Navbar />;
