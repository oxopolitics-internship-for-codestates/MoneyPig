import { collection } from 'firebase/firestore/lite';
import { quizConverter } from './../src/store/QuizStore';
import { addDoc, getDocs } from 'firebase/firestore';

import fireStore from '../src/firebase/Firebase';
import { Quiz } from '../src/store/QuizStore';
import {
  getFirestore,
  CollectionReference,
  DocumentData,
} from 'firebase/firestore';
class QuizService {
  constructor() {}

  async quizUpload(data: Quiz) {
    await addDoc(collection(fireStore, 'quizes'), data);
  }
}

const quizService = new QuizService();

export default quizService;
