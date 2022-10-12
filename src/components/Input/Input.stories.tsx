import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputTypeProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const InputDefault: ComponentStory<typeof Input> = () => (
  <Input type={InputTypeProps.text} placeholder="Search..." />
);

export const InputError: ComponentStory<typeof Input> = () => (
  <Input
    type={InputTypeProps.text}
    placeholder="Search..."
    isReceived={false}
  />
);
