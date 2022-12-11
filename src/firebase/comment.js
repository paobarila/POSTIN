import {app} from './index.js'
import {getFirestore, addDoc, collection} from 'firebase/firestore'
import {async} from '@firebase/util'


const db = getFirestore(app)

const addComment = (comment) =>{
    addDoc(collection(db,"comments"),comment);
}
export {addComment}