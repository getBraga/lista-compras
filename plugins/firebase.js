import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/database'
import Vue from 'vue'

const fireBaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
})
let app = null

if (!firebase.app.length) {
  // eslint-disable-next-line no-unused-vars
  app = firebase.initializeApp(fireBaseApp)
}
export default ({ app }, inject) => {
  inject('firebase', Vue.observable(firebase))
}
// export default firebase
