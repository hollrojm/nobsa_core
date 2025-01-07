import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBMDdwv2RWy3YXTauVTnIQ9n36vzcnER6I",
  authDomain: "nobsapp-df354.firebaseapp.com",
  projectId: "nobsapp-df354",
  storageBucket: "nobsapp-df354.appspot.com",
  messagingSenderId: "475057153060",
  appId: "1:475057153060:web:c047d449e239bc8372e4b1",
  measurementId: "G-NHBXNEZTXK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, analytics };
