import { getAuth } from 'firebase/auth';
import appFirebase from './firebaseConfig';

const auth = getAuth(appFirebase);
export default auth;
