import {
  collection,
  query,
  QueryDocumentSnapshot,
  SnapshotOptions,
  addDoc,
  updateDoc,
  doc,
  getDoc,
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
    console.log(data);

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
    await addDoc(collection(fireStore, 'quizes'), data).then(async res => {
      const frankDocRef = doc(fireStore, 'quizes', res.id);
      await updateDoc(frankDocRef, {
        id: res.id,
      });
    });
  }

  async getQuizes() {
    const quizes: Quiz[] = [];
    const q = query(collection(fireStore, 'quizes'));
    await getDocs(q).then(res => {
      res.forEach(doc => {
        quizes.push(JSON.parse(JSON.stringify(doc.data())));
      });
    });
    return quizes;
  }

  async getQuiz(id: string) {
    try {
      const docRef = doc(fireStore, 'quizes', id);
      const docSnap = await getDoc(docRef);
      const quiz: Quiz = JSON.parse(JSON.stringify(docSnap.data()));
      return quiz;
    } catch (err) {
      console.log(err);
    }
  }
}

const quizService = new QuizService();

export default quizService;
