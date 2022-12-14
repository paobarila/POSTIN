import {app} from './index.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from 'firebase/auth';
import useUser from '../store/profile.js';



const auth = getAuth(app);
const store = useUser();

const loginGoogle= () => {
    const googleProvider = new GoogleAuthProvider();


    signInWithPopup(auth, googleProvider)
    .then((result)=>{
        
        store.addUser(result.user);

        
    })
    .catch ((error) =>{
        console.warn('error', error);
    })
}

function logOut (){
    signOut(auth).then(() =>{

    }).catch((error)=>{

    });
}

onAuthStateChanged(auth, (user) => {

    store.addUser(user);

});


export{ loginGoogle,logOut}

//import { app } from './index.js';
//import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
//import { ref } from 'vue';
//import user from '../store/User.js';
//import { addUser } from './users.js';

//const auth = getAuth(app)
//const provider = new GoogleAuthProvider();


//const loginWithGoogle = () => {
  //  signInWithPopup(auth, provider)
    //.then((result) => {
      //  console.log('result', result);
        // logica de buscar el usuario por email en la base de datos de usuarios
        // si no tengo el usuario, lo creo y si lo tengo me lo traigo
        //let newUser = {
          //  displayName: result.user.displayName,
            //photoURL: result.user.photoURL,
           // email: result.user.email,
       // }
        //user.value = {
          //  ...newUser
        //}
        /* addUser(newUser) */
    //})
    //.catch((error) => {
      //  console.log('error', error);
    //});
//};

//const logout = () => {
  //  auth.signOut(auth)
    //.then(() => {
      //  console.log('logged out');
       // user.value = null;
   // }
   // )
   // .catch((error) => {
     //   console.log('error', error);
    //});
//};

//export { loginWithGoogle, logout, user };