import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC5cvEidBppH4aBO4TGqNIblEOErrBulok',
  authDomain: 'next-notflix.firebaseapp.com',
  projectId: 'next-notflix',
  storageBucket: 'next-notflix.appspot.com',
  messagingSenderId: '510777688392',
  appId: '1:510777688392:web:c0a242ce470bde0e5c737d',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
