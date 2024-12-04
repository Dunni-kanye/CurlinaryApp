import React from 'react'
import style from '../styles/header.module.css';
// import 'animate.css';
// import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <div>
        
        <header className={style.header}>
          {/* Menu Button and Logo */}
          <div className={style.menuAndLogo}>
            <button className={style.menuButton}>&#9776;</button>
            <h1 className={style.logo}>CURLINARYCONNECT</h1>
          </div>
  
          {/* Auth Buttons */}
          <div className={style.authButtons}>
            <button className={style.loginButton}>Log in</button>
            <button className={style.signupButton}>Sign up</button>
          </div>
        </header>

        
           {/* Search Section */}
      <section className={style.searchSection}>
        <h1 className={style.searchHeading}>Discover, Cook, Savor</h1>
        <div className={style.searchBar}>
          <input
            type="text"
            placeholder="What will you like to cook?"
            className={style.inputField}
          />
          <button className={style.searchButton}>Search here</button>
        </div>
        <p className={style.signInText}>
          {/* Or <span className={style.signInLink}>Sign In</span> */}
        </p>
      </section>
        </div>
    );
  };
  
  export default Header;
  