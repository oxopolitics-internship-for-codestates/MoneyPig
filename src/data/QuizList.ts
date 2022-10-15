export type QuizModel = {
  quizes: UnionQuiz[];
};

export type UnionQuiz = OxQuizModel | FourOptionQuizModel;

export type OxQuizModel = {
  id: string;
  title: string;
  userId: string;
  createdAt: number;
  answer: string;
  time: QuizTime;
  keyword: string;
  type: QuizType;
  description: string;
};

export enum QuizTime {
  fiveSec = 5,
  tenSec = 10,
  fifteenSec = 15,
  thirtySec = 30,
  oneMin = 60,
  infinite = 0,
}

export enum QuizType {
  oxQuiz = 'OxQuiz',
  FourOptionQuiz = 'FourOptionQuiz',
}
export type FourOptionQuizModel = {
  id: string;
  title: string;
  userId: string;
  options: string[];
  answer: string;
  createdAt: number;
  time: QuizTime;
  keyword: string;
  type: QuizType;
  description: string;
};

export const quizList: QuizModel = {
  quizes: [
    {
      id: '1',
      title: '엔화에 대한 설명으로 옳은 것은?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      options: ['일본의 화폐이다.', '미국의 화폐이다'],
      answer: '',
      time: QuizTime.oneMin,
      keyword: '엔화',
      type: QuizType.FourOptionQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '2',
      title: '엔화에 일본의 화폐이다.?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: 'O',
      time: QuizTime.infinite,
      keyword: '엔화',
      type: QuizType.oxQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '3',
      title: '엔화에 대한 설명으로 옳은 것은?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      options: ['일본의 화폐이다.', '미국의 화폐이다'],
      answer: '',
      time: QuizTime.oneMin,
      keyword: '엔화',
      type: QuizType.FourOptionQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '4',
      title: '엔화에 일본의 화폐이다.?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: 'O',
      time: QuizTime.infinite,
      keyword: '엔화',
      type: QuizType.oxQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '5',
      title: '엔화에 대한 설명으로 옳은 것은?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      options: ['일본의 화폐이다.', '미국의 화폐이다'],
      answer: '',
      time: QuizTime.oneMin,
      keyword: '엔화',
      type: QuizType.FourOptionQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '6',
      title: '엔화에 일본의 화폐이다.?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: 'O',
      time: QuizTime.infinite,
      keyword: '엔화',
      type: QuizType.oxQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '7',
      title: '엔화에 대한 설명으로 옳은 것은?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      options: ['일본의 화폐이다.', '미국의 화폐이다'],
      answer: '',
      time: QuizTime.oneMin,
      keyword: '엔화',
      type: QuizType.FourOptionQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '8',
      title: '엔화에 일본의 화폐이다.?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: 'O',
      time: QuizTime.oneMin,
      keyword: '엔화',
      type: QuizType.oxQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '9',
      title: '엔화에 대한 설명으로 옳은 것은?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      options: ['일본의 화폐이다.', '미국의 화폐이다'],
      answer: '',
      time: QuizTime.oneMin,
      keyword: '엔화',
      type: QuizType.FourOptionQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '10',
      title: '엔화에 일본의 화폐이다.?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: 'O',
      time: QuizTime.oneMin,
      keyword: '엔화',
      type: QuizType.oxQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
  ],
};
