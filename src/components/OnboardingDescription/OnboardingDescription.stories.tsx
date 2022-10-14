import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import OnboardingDescription, {
  Image_Location_Position,
} from './OnboardingDescription';

export default {
  component: OnboardingDescription,
  title: 'Components/OnboardingDescription',
} as ComponentMeta<typeof OnboardingDescription>;

export const Onboarding: ComponentStory<typeof OnboardingDescription> = () => (
  <OnboardingDescription
    description={'안녕하세요'}
    image={
      'http://res.heraldm.com/content/image/2015/01/19/20150119001097_0.jpg'
    }
    imgLocation={Image_Location_Position.RIGHT}
  />
);
