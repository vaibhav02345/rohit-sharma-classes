// =====================================================
// FIREBASE CONFIGURATION — Rohit Sharma Classes
// =====================================================
// HOW TO SET UP:
// 1. Go to https://console.firebase.google.com
// 2. Click "Create a project" → name it "rohit-sharma-classes"
// 3. Once created, click ⚙️ → Project Settings → scroll down
// 4. Under "Your apps", click the Web icon (</>)
// 5. Register app name: "rsc-website"
// 6. Copy the firebaseConfig object and replace the values below
// 7. Go to Build → Firestore Database → Create Database → Start in TEST mode
// 8. Go to Build → Storage → Get Started → Start in TEST mode
// =====================================================

const firebaseConfig = {
  apiKey: "AIzaSyDdOWkFk196dvrooOgUzNDv7MSzDIlWU0E",
  authDomain: "rohitsharmaclasses-46da5.firebaseapp.com",
  projectId: "rohitsharmaclasses-46da5",
  storageBucket: "rohitsharmaclasses-46da5.firebasestorage.app",
  messagingSenderId: "735400344915",
  appId: "1:735400344915:web:d2f8ef5e67d67b276e75a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
