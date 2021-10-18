import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthenTication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthenTication;