// Navbar.js update
import React, { useState } from 'react';
import './Navbar.css';
import user from '../Assets/user.jpg';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setMenu] = useState(false);

  const onlink_click = () => {
    setMenu(false);
  }

  return (
    <>
      <div className="Navbar">
        <div className="Navbar__logo">
          
          <h2 id='name-heading'>Dev Patil</h2>
          
        </div>
        <div className={showMenu ? 'Navbar__menu active' : 'Navbar__menu'}>
          <ul><li onClick={onlink_click}><Link style={{color : 'blanchedalmond' , textDecoration:'none'}} to="/">Home</Link></li></ul>
          <ul><li onClick={onlink_click}><Link style={{color : 'blanchedalmond' , textDecoration:'none'}} to="/projects">Projects</Link></li></ul>
          <ul><li onClick={onlink_click}><Link style={{color : 'blanchedalmond' , textDecoration:'none'}} to="/blogs">Blogs</Link></li></ul>

          <div className="socials">
            <a href="https://www.linkedin.com/in/dev-patil-b92743241/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin linkedin-icon"></i>
            </a>
            <a href="https://github.com/DevPatils" target="_blank" rel="noreferrer">
              <i className="fab fa-github github-icon"></i>
            </a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FDevPatil106" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter twitter-icon"></i>
            </a>
          </div>
        </div>
        <div className="bars">
          {showMenu ? (
            <IoClose className='close-outline' onClick={() => setMenu(false)} />
          ) : (
            <GiHamburgerMenu className='ham-outline' onClick={() => setMenu(true)} />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
