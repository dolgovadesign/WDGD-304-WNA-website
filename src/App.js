import firebase from 'firebase';
import './app.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';

if (firebase.apps.length < 1) {
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyBnV16vKuZYzNzLJmRnaI5nGw-wHAGAWgk",
    authDomain: "portfolio-website-b9d3d.firebaseapp.com",
    projectId: "portfolio-website-b9d3d",
    storageBucket: "portfolio-website-b9d3d.appspot.com",
    messagingSenderId: "1075224746881",
    appId: "1:1075224746881:web:a7d55332be49f6aff1e680"
  });
}

function App() {
  return (
    //Add main components of the website
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
