import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import KeywordDescriptionCard from './KeywordDescriptionCard';

export default {
  title: 'Components/KeywordDescriptionCard',
  component: KeywordDescriptionCard,
} as ComponentMeta<typeof KeywordDescriptionCard>;

const KeywordDescriptionTemplate: ComponentStory<
  typeof KeywordDescriptionCard
> = args => {
  return <KeywordDescriptionCard {...args} />;
};

export const Default = KeywordDescriptionTemplate.bind({});
Default.args = {
  keyword: '가격차별',
  description:
    '같은 상품에 대해 구입자에 따라 다른 가격을 받는 행위를 말한다. 가격차별은 독점시장에서 나타나며, 경쟁시장에서는 찾아볼 수 없다. 주변에서 찾아볼 수 있는 가격차별의 사례로는 영화관의 조조할인, 요일이나 계절에 따라 다른 비행기표 가격, 각종 할인권, 라면 10개를 사면 1개를 덤으로 주는 수량할인 등을 들 수 있다.',
};
