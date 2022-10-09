import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconBox, { IconType } from './Icon';

export default {
  title: 'Components/Icon',
  component: IconBox,
} as ComponentMeta<typeof IconBox>;

export const Icon: ComponentStory<typeof IconBox> = () => (
  <IconBox iconName={IconType.menu}></IconBox>
);
