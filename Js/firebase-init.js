// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDwsyUXqBofnuVHavU2EcH0FOXE_WizMg",
    authDomain: "mbti-love-lab-comments.firebaseapp.com",
    projectId: "mbti-love-lab-comments",
    storageBucket: "mbti-love-lab-comments.appspot.com",
    messagingSenderId: "457333071060",
    appId: "1:457333071060:web:249b163d70667d559cef41",
    measurementId: "G-N5RNZFXLEH"
};

// Initialize Firebases
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const analytics = firebase.analytics();
