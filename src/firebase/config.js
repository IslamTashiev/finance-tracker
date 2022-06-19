import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2xWtiJALEmxTmaE5tTSQM28XrkwuWEIk",
  authDomain: "finance-tracker-e5e50.firebaseapp.com",
  projectId: "finance-tracker-e5e50",
  storageBucket: "finance-tracker-e5e50.appspot.com",
  messagingSenderId: "102321632288",
  appId: "1:102321632288:web:8654c5131936738c71b845",
};
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
