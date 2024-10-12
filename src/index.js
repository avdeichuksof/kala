import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tejidos-kala.firebaseapp.com",
  projectId: "tejidos-kala",
  storageBucket: "tejidos-kala.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
