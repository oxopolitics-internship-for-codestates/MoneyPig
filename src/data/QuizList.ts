export type QuizModel = {
  quizes: unionQuiz[];
};

export type unionQuiz = OxQuizModel | FourOptionQuizModel;

type OxQuizModel = {
  id: string;
  title: string;
  userId: string;
  createdAt: number;
  answer: string;
  time: string;
  keyword: string;
  type: string;
  description: string;
};

type FourOptionQuizModel = {
  id: string;
  title: string;
  userId: string;
  options: string[];
  answer: string;
  createdAt: number;
  time: string;
  keyword: string;
  type: string;
  description: string;
};

export const quizList: QuizModel = {
  quizes: [
    {
      id: '1',
      title: '엔화에 대한 설명으로 옳은 것은?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: '',
      time: '15s',
      keyword: '엔화',
      type: 'FourOptionQuiz',
      description: '엔화는 일본의 화폐입니다.',
    },
    {
      id: '2',
      title: '엔화에 일본의 화폐이다.?',
      userId: 'tmdqls2257',
      createdAt: 1665309414,
      answer: 'O',
      time: '15s',
      keyword: '엔화',
      type: 'OxQuiz',
      description: '엔화는 일본의 화폐입니다.',
    },
  ],
};
