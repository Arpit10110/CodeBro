import React from 'react'
import "../style/header.css"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
const Header = () => {
  function menuFun(){
    let menuBtn=document.querySelector(".menu");
    let main=document.querySelector(".main");
    menuBtn.style="display:none;"
    main.style="display:flex;"
  }
  function closefun(){
    let menuBtn=document.querySelector(".menu");
    let main=document.querySelector(".main");
    menuBtn.style="display:block;"
    main.style="display:none;"
  }
  return (
    <nav className='navbar'>
        <h4 className='logoName'>CodeBro</h4>
        <main className='main'>
        <img className='close'  onClick={closefun} src={close} alt="" />
            <Link  className='nava'  to="/">Home</Link>
            <HashLink className='nava'  to="/#About">About</HashLink>
            <Link className='nava'  to="/Contact">Contact</Link>
            <Link className='nava'  to="/Course">Course</Link>
        </main>
        <img onClick={menuFun}  className="menu" src={menu} alt="" />
    </nav>
  )
}

export default Header