import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './card';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardDafault: ComponentStory<typeof Card> = () => (
  <Card>
    <h3>{'카드 스토리입니다.'}</h3>
    <p>{'카드 스토리입니다.'}</p>
  </Card>
);
