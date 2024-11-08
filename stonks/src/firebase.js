// import { firebase } from 'firebase'
// import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBV29GpU3vCCAwZsymWWRvsK6_hoC2Oy6c',
  authDomain: 'stonks-5319b.firebaseapp.com',
  projectId: 'stonks-5319b',
  storageBucket: 'stonks-5319b.appspot.com',
  messagingSenderId: '314834159216',
  appId: '1:314834159216:web:2ee6529acb132cf13316b5',
  measurementId: 'G-2QZVWCG31L'
}

const fire = initializeApp(firebaseConfig)
// const db = getFirestore(fire)
// const analytics = getAnalytics(fire)
export default fire
