//to commit, use "git add .", then "git commit -m "something"", then "npm run deploy", then "git push -u origin master"
import logo from './logo.svg';
import profileImage from './img/profile-image.jpg';
import './App.css';
import { GoogleSignin, GoogleSigninbutton } from '@react-native-community/';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCCtkl_rr-spMhBFgP2lxcYpZZk0RY2xOw",
    authDomain: "cas-project1.firebaseapp.com",
    projectId: "cas-project1",
    storageBucket: "cas-project1.appspot.com",
    messagingSenderId: "1059867147493",
    appId: "1:1059867147493:web:63fc2249cba7bf9bca280c",
    measurementId: "G-QMEZYLP0G1"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <h1> Will's Workout Tracker V.1 </h1>
      <h2>Still a work in progress. Here's a photo of me:</h2>
      <img width="500" height="625" src={profileImage} alt="profile-image" />
      <section>
        {user ? <workoutSubmit/> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    {/* const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);*/}
    const { idToken } = await GoogleSignin.SignIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }
return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function workoutSubmit() {
  
  <form>

  </form>
}

function SignOut() {
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}
export default App;
