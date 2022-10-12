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
  time: number;
  keyword: string;
  type: QuizType;
  description: string;
};

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
  time: number;
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
      time: 60,
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
      time: 0,
      keyword: '엔화',
      type: QuizType.oxQuiz,
      description: '엔화는 일본의 화폐입니다.',
    },
  ],
};
