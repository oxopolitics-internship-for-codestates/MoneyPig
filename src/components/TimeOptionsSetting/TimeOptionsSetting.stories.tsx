import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimeOptionsSetting from './TimeOptionsSetting';

export default {
  title: 'Components/timeOptionsSetting',
  component: TimeOptionsSetting,
} as ComponentMeta<typeof TimeOptionsSetting>;

export const TimeOptionDropDown: ComponentStory<typeof TimeOptionsSetting> =
  () => <TimeOptionsSetting />;
