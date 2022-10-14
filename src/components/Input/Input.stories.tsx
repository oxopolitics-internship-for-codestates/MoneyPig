import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputTypeProps, QuizProps } from './Input';

import EconomyData from '../../../economyData.json';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const InputTemplate: ComponentStory<typeof Input> = args => {
  return <Input {...args} term={args.term} />;
};

export const Default = InputTemplate.bind({});
Default.args = {
  type: InputTypeProps.text,
  placeholder: 'Search...',
};

export const Success = InputTemplate.bind({});
Success.args = {
  type: InputTypeProps.text,
  placeholder: 'Search...',
  term: EconomyData,
};

export const Error = InputTemplate.bind({});
Error.args = {
  type: InputTypeProps.text,
  placeholder: 'Search...',
  term: [],
};
