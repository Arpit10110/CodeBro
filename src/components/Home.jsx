import React from 'react'
import "../style/home.css"
import intro from "../assets/intro.png"
import Cimg from "../assets/C.png"
import python from "../assets/python.png"
import JavaScript from "../assets/javaScript.png"
import react from "../assets/react.png"
const home = () => {
  return (
   <>
   <section className='introsec'>
   <div className="intro">
    <div className="introdution">
    <h4 className='introhead'>Hello World {":)"}</h4>
    <p className='introCont'>
      Hey in this platform you will learn about Programing languages like JavaScript,C,C++,Python and Java and may more.Let's go ahead and learn more about problem solving , DSA which will help you in the placement and help you to grow in your carrier...
    </p>
    </div>
    <img className='introImg' src={intro} alt="" />
   </div>
   </section>
   <section className='AboutSec' id='About'>
    <div className='Aboutdiv'>
      <h2 className='abouthead'>About Us</h2>
      <p className='aboutCont'> 
      Welcome to CODEBRO, your premier destination for mastering programming languages and Data Structures and Algorithms (DSA). We are passionate about empowering individuals with the knowledge and skills needed to excel in the ever-evolving world of technologyAt CODEBRO our mission is clear: to provide accessible, high-quality education in programming and DSA. We believe that education is the key to unlocking limitless possibilities in the tech industry, and we are dedicated to making learning engaging, effective, and fun.
      </p>
    </div>
    <div className="aboutImgDiv">
      <img  style={{animationDelay: "0.9s"}} className='aboutImg' src={Cimg} alt="" />
      <img style={{animationDelay: "0.6s"}}  className='aboutImg' src={python} alt="" />
      <img style={{animationDelay: "0.4s"}}  className='aboutImg' src={JavaScript} alt="" />
      <img style={{animationDelay: "0.2s"}}  className='aboutImg' src={react} alt="" />
    </div>
   </section>
   </>
  )
}

export default home
