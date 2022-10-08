import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Timer from './timer';

export default {
  title: 'Components/Timer',
  component: Timer,
} as ComponentMeta<typeof Timer>;

export const CardDafault: ComponentStory<typeof Timer> = () => <Timer></Timer>;
