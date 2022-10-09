import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const InputDefault: ComponentStory<typeof Input> = () => (
  <Input type="text" placeholder="Search..." />
);

export const InputError: ComponentStory<typeof Input> = () => (
  <Input type="text" placeholder="Search..." isReceived={false} />
);
