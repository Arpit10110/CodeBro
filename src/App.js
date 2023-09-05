import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact.jsx';
import Course from './components/Course.jsx';
import Footer from './components/Footer';
import "./style/header.css"
import "./style/Contact.css"
import "./style/Style.css"
import "./style/home.css"
import "./style/footer.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
const App = () => {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Course" element={<Course/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  )
}
export default App
