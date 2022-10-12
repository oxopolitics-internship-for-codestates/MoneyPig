import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputTypeProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const InputTemplate: ComponentStory<typeof Input> = args => {
  return <Input {...args} quiz={args.quiz} />;
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
  quiz: [
    {
      id: '1',
      title: '엔화에 대한 설명으로 옳은 것을 하나 선택하시오',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: '',
      time: '15s',
      keyword: '독점적 경쟁시장',
      type: 'FourOptionQuiz',
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '2',
      title: '엔화에 대한 설명으로 옳은 것을 하나 선택하시오',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: '',
      time: '15s',
      keyword: '독점적인',
      type: 'FourOptionQuiz',
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '3',
      title: '엔화에 대한 설명으로 옳은 것을 하나 선택하시오',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: '',
      time: '15s',
      keyword: '독점적',
      type: 'FourOptionQuiz',
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '4',
      title: '엔화에 대한 설명으로 옳은 것을 하나 선택하시오',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: '',
      time: '15s',
      keyword: '독도',
      type: 'FourOptionQuiz',
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '5',
      title: '엔화에 대한 설명으로 옳은 것을 하나 선택하시오',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: '',
      time: '15s',
      keyword: '엔화',
      type: 'FourOptionQuiz',
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '6',
      title: '엔화에 대한 설명으로 옳은 것을 하나 선택하시오',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: '',
      time: '15s',
      keyword: '독도점',
      type: 'FourOptionQuiz',
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '7',
      title: '엔화에 대한 설명으로 옳은 것을 하나 선택하시오',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: '',
      time: '15s',
      keyword: '독도도',
      type: 'FourOptionQuiz',
      description: '엔화는 일본의 화폐입니다.',
    },
  ],
};

export const Error = InputTemplate.bind({});
Error.args = {
  type: InputTypeProps.text,
  placeholder: 'Search...',
  quiz: [],
};
