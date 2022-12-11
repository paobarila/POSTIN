
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCJTwhZvvDx8ThE_lfkxbmELO41ABBf-fg',
  authDomain: 'postin-b5695.firebaseapp.com',
  projectId: 'postin-b5695',
  storageBucket: 'postin-b5695.appspot.com',
  messagingSenderId: '166266268186',
  appId: '1:166266268186:web:5af40217f3e535e239ffa3'
};


const app = initializeApp(firebaseConfig);


export {app};