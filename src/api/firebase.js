// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import {getDatabase, ref, get } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROGECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
    prompt: 'select_account',
});
const database = getDatabase(app);

export function login() {
    signInWithPopup(auth, provider)
        .catch(console.error)
        
        // .then((result) => {
        //     const user = result.user;
        //     console.log('user',user);
        // }).catch((error) => {
        //     console.log(error)
        // });
}


export  function logout() {
    signOut(auth);
}

export function onUserStateChange(callback){
     onAuthStateChanged(auth,async(user) =>{
        // 1. 사용자가 있는 경우에 (로그인한경우)
        const updatedUser = user ? await adminUser(user) : null;
        callback(updatedUser)
        // if(user){
        //     const uid = user.uid;
        // }else{
            
        // } 
     })
}

async function adminUser(user){
    // 2. 사용자가 어드민 권한을 가지고 있는지 확인
    // 3. {...user, isAdmin : true/false}
    return get(ref(database, 'admins')).then((snapshot) => {
        if(snapshot){
            const admins = snapshot.val();
            // console.log(admins);
            const isAdmin = admins.includes(user.uid)
            return {...user, isAdmin}
        }
        return user;
    })
}