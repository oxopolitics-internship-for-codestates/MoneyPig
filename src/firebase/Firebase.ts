import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore/lite';
// import { getFirestore } from 'firebase/firestore';

// import { getFirestore } from '@firebase/firestore/lite';
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STOAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APPID,
};

export const firebase = initializeApp(firebaseConfig);

const fireStore = getFirestore(firebase);

export default fireStore;
