import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from "firebase/firestore";
import { Team } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyAw1xnlj9MShnrH44mZDuMcM4T1yJ48N_Q",
  authDomain: "intellihack-3.firebaseapp.com",
  projectId: "intellihack-3",
  storageBucket: "intellihack-3.appspot.com",
  messagingSenderId: "1055824934254",
  appId: "1:1055824934254:web:bd91e895fb1e49ab2afd7f",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

/**
 * Reference to the collection of opportunities
 * Types will be inferred from the type of the data automatically when using this
 */
export const teamCollection = createCollection<Team>("teams");
