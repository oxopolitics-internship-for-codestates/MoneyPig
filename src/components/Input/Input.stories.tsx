import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputBoxTypeProps, InputTypeProps, TermProps } from './Input';
import data from '../../../public/economyData.json';
import { IconType } from '../Icon/Icon';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const InputTemplate: ComponentStory<typeof Input> = args => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <Input {...args} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
  );
};

export const Default = InputTemplate.bind({});
Default.args = {
  type: InputTypeProps.text,
  placeholder: 'Search...',
  style: 'w-full px-12 py-3 mr-3 bg-[#E9E7E7]',
  inputBoxType: InputBoxTypeProps.default,
};

export const Search = InputTemplate.bind({});
Search.args = {
  type: InputTypeProps.text,
  placeholder: 'Search...',
  style: 'w-full  py-3 mr-3 bg-[#E9E7E7]',
  iconList: [
    { style: 'w-12 h-12 p-3', iconName: IconType.search },
    { style: 'w-11 h-12 p-3', iconName: IconType.cancel },
  ],
  inputBoxType: InputBoxTypeProps.search,
};

// export const Success = InputTemplate.bind({});
// Success.args = {
//   type: InputTypeProps.text,
//   placeholder: 'Search...',
// };

// export const Error = InputTemplate.bind({});
// Error.args = {
//   type: InputTypeProps.text,
//   placeholder: 'Search...',
//   term: [],
// };
