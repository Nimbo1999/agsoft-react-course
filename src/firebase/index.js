import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB6YvSMimT1AjQ0qHYtBKk4f_tvcc9pIcw',
    authDomain: 'portfolio-c683b.firebaseapp.com',
    projectId: 'portfolio-c683b',
    storageBucket: 'portfolio-c683b.appspot.com',
    messagingSenderId: '569958861730',
    appId: '1:569958861730:web:b68d01c20f0717d8b940fb',
    measurementId: 'G-83D3TD0KPT'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categoriesCollection = collection(db, 'categories');

const categoriesDocs = getDocs(categoriesCollection);

export { categoriesDocs };