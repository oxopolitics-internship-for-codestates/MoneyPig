import { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
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

const quizConverter = {
  toFireStore: (quiz: Quiz) => {
    return {
      id: quiz.id,
      title: quiz.title,
      userId: quiz.userId,
      createdAt: quiz.createdAt,
      answer: quiz.answer,
      time: quiz.time,
      keyword: quiz.keyword,
      type: quiz.type,
      description: quiz.description,
      options: quiz.options,
    };
  },

  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ) => {
    const data = snapshot.data(options);
    return new Quiz(
      data.id,
      data.title,
      data.userId,
      data.createdAt,
      data.answer,
      data.time,
      data.keyword,
      data.type,
      data.description,
      data.options,
    );
  },
};

export class QuizStore {
  quiz: Quiz = {
    id: '',
    title: '',
    userId: '',
    createdAt: 0,
    options: [],
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

  setOptions = (option: string) => {
    this.quiz.options.push(option);
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
    console.log(toJS(this.quiz));
    return toJS(this.quiz);
  }
}

const newQuiz = new QuizStore();
export default newQuiz;
