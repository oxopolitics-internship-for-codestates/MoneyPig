import { collection } from 'firebase/firestore/lite';

import {
  addDoc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';

import fireStore from '../src/firebase/Firebase';
import { Quiz } from '../src/store/QuizStore';

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

class QuizService {
  constructor() {}

  async quizUpload(data: Quiz) {
    await addDoc(collection(fireStore, 'quizes'), data);
  }

  async getQuizes() {
    console.log(1);

    const querySnapshot = await getDocs(query(collection(fireStore, 'quizes')));
    console.log('querySnapshot', querySnapshot);

    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  }
}

const quizService = new QuizService();

export default quizService;
