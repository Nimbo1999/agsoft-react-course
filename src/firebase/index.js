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

const _categoriesDocs = getDocs(categoriesCollection);

const getCategoriesCollection = async () => {
    const categories = [];
    const categoriesDocuments = await _categoriesDocs;
    categoriesDocuments.forEach(document =>
        categories.push({ ...document.data(), id: document.id })
    );
    return categories;
};

const _productsData = id => getDocs(collection(categoriesCollection, id, 'products'));

const getCategoryProducts = async id => {
    const products = [];
    const productsResponse = await _productsData(id);
    productsResponse.forEach(documents => products.push({ ...documents.data(), id: documents.id }));
    return products;
};

export { getCategoriesCollection, getCategoryProducts };
