import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAxgfPo7wfInYnuqz9E_j8dIgX1-82ow_M",
  authDomain: "alerta-recife-5752c.firebaseapp.com",
  projectId: "alerta-recife-5752c",
  storageBucket: "alerta-recife-5752c.appspot.com",
  messagingSenderId: "748434871661",
  appId: "1:748434871661:web:b5db66433ce4b49d4af664",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)