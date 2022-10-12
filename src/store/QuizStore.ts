import { makeObservable, observable } from 'mobx';
import { FourOptionQuizModel, OxQuizModel, QuizType } from './../data/QuizList';

export class Quiz implements FourOptionQuizModel, OxQuizModel {
  id: string;
  title: string;
  userId: string;
  createdAt: number;
  answer: string;
  time: number;
  keyword: string;
  type: QuizType;
  description: string;
  options: string[];

  constructor(
    id: string,
    title: string,
    userId: string,
    createdAt: number,
    answer: string,
    time: number,
    keyword: string,
    type: QuizType,
    description: string,
    options: string[],
  ) {
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.createdAt = createdAt;
    this.answer = answer;
    this.options = options;
    this.time = time;
    this.keyword = keyword;
    this.type = type;
    this.description = description;
  }
}

export default class QuizStore {
  quiz: Quiz = {
    id: '',
    title: '',
    userId: '',
    createdAt: 0,
    options: [''],
    answer: '',
    time: 0,
    keyword: '',
    type: QuizType.FourOptionQuiz,
    description: '',
  };
  constructor() {
    makeObservable(this, {
      quiz: observable,
    });
  }
}
