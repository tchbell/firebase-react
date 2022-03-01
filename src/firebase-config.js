// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD_5jb0zYvH_5UyWdOOWnzP7zvpvvmrw14',
	authDomain: 'fir-tut-1cc59.firebaseapp.com',
	projectId: 'fir-tut-1cc59',
	storageBucket: 'fir-tut-1cc59.appspot.com',
	messagingSenderId: '911683406811',
	appId: '1:911683406811:web:ef867b31c4b495c118b5fe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
