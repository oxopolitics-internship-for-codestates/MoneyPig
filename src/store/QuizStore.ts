import { Timestamp } from 'firebase/firestore';
import { action, computed, makeObservable, observable, toJS } from 'mobx';

import {
  FourOptionQuizModel,
  OxQuizModel,
  QuizTime,
  QuizType,
} from './../data/QuizList';

export class Quiz implements FourOptionQuizModel, OxQuizModel {
  id: string;
  title: string;
  userId: string;
  createdAt: Timestamp;
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
    createdAt: Timestamp,
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

export class QuizStore {
  quiz: Quiz = {
    id: '',
    title: '',
    userId: '',
    createdAt: Timestamp.now(),
    options: ['', '', '', ''],
    answer: '',
    time: QuizTime.fifteenSec,
    keyword: '',
    type: QuizType.FourOptionQuiz,
    description: '',
  };
  constructor() {
    makeObservable(this, {
      quiz: observable,
      setTitle: action,
      setOptions: action,
      setAnswer: action,
      setTime: action,
      setKeyWord: action,
      setType: action,
      setDescription: action,
      makeAQuiz: computed,
    });
  }

  setTitle = (title: string) => {
    this.quiz.title = title;
  };

  setOptions = (option: string, idx: number) => {
    this.quiz.options[idx] = option;
  };

  setAnswer = (answer: string) => {
    this.quiz.answer = answer;
  };

  setTime = (time: QuizTime) => {
    this.quiz.time = time;
  };

  setKeyWord = (keyword: string) => {
    this.quiz.keyword = keyword;
  };

  setType = (type: QuizType) => {
    this.quiz.type = type;
  };

  setDescription = (description: string) => {
    this.quiz.description = description;
  };

  get makeAQuiz() {
    this.quiz.createdAt = Timestamp.now();
    console.log(toJS(this.quiz));
    return toJS(this.quiz);
  }
}

const newQuiz = new QuizStore();
export default newQuiz;
