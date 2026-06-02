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
  apiKey: "AIzaSyAjSrYmAIOA4jAO2wSc2sU8nja1RP24Of4",
  authDomain: "rohitsharmaclasses-b84c7.firebaseapp.com",
  projectId: "rohitsharmaclasses-b84c7",
  storageBucket: "rohitsharmaclasses-b84c7.firebasestorage.app",
  messagingSenderId: "437910006938",
  appId: "1:437910006938:web:467bece3bca78316874323"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
