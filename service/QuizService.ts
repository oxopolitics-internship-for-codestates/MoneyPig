import {
  collection,
  onSnapshot,
  query,
  orderBy,
  QueryDocumentSnapshot,
  SnapshotOptions,
  addDoc,
  getDocs,
} from 'firebase/firestore';

import fireStore from '../src/firebase/Firebase';
import { Quiz } from '../src/store/QuizStore';

export const quizConverter = {
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

class QuizService {
  constructor() {}

  async quizUpload(data: Quiz): Promise<void> {
    await addDoc(collection(fireStore, 'quizes'), data);
  }

  getQuizes(setState: React.Dispatch<React.SetStateAction<Quiz[]>>) {
    let quizes: Quiz[] = [];

    const queryData = query(
      collection(fireStore, 'quizes'),
      orderBy('createdAt', 'desc'),
    );

    onSnapshot(queryData, snapshot => {
      quizes = snapshot.docs.map(doc => {
        return quizConverter.fromFirestore(doc, {});
      });
      setState(quizes);
    });
  }
}

const quizService = new QuizService();

export default quizService;
