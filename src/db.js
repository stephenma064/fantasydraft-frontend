import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCXHv94qPXRl8WegVyiUnP9gRa1YyDhDaU',
  authDomain: 'fantasy-72e5b.firebaseapp.com',
  databaseURL: 'https://fantasy-72e5b.firebaseio.com',
  projectId: 'fantasy-72e5b',
  storageBucket: 'fantasy-72e5b.appspot.com',
  messagingSenderId: '138035254493'
}

const app = Firebase.initializeApp(config)
const db = app.database()
export default db
