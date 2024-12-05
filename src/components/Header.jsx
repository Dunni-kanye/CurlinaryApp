import React, { useState } from 'react';
import style from '../styles/header.module.css'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer"

const Header = () => {

  const navigate = useNavigate();

  const handleClick = ()=> {
    navigate("/login")
    console.log("it is working")
  }



  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Header Section */}
      <header className={style.header}>
        {/* Menu Button and Logo */}
        <div className={style.menuAndLogo}>
          {/* <Link to={""}></Link> */}
          <button className={style.menuButton} onClick={toggleMenu}>
            &#9776;
          </button>
          <h1 className={style.logo}>CURLINARYCONNECT</h1>
        </div>

        {/* Auth Buttons */}
        <div className={`${style.authButtons} ${menuOpen ? style.showMenu : ''}`}>
          <Link to={"/"}>
            <button className={style.homeButton}>Home</button>
          </Link>
            <button className={style.loginButton} onClick={handleClick}>Log in</button>
          <Link to={"/signup"}>
            <button className={style.signupButton}>Sign up</button>
          </Link>
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
        <p className={style.signInText}></p>
      </section>
      <Footer/>
    </div>
  );
};

export default Header;
