import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const HeaderDefault: ComponentStory<typeof Header> = args => {
  const [menuState, setMenuState] = useState(true);

  return <Header {...args} setMenuState={setMenuState} menuState={menuState} />;
};
export const HeaderExample = HeaderDefault.bind({});
HeaderExample.args = {
  menuState: true,
};
