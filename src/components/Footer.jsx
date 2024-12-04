import React from "react";
import style from "../styles/footer.module.css"
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <footer className={style.footer}>
      {/* Top Section */}
      <div className={style.footerContent}>
        <div className={style.column}>
          <h3>CURLINARYCONNECT</h3>
        </div>
        <div className={style.column}>
          <ul>
            <li>Get Help</li>
            <li>Buy gift cards</li>
            <li>Add your recipe</li>
            <li>Sign up to cook</li>
            <li>Create a business account</li>
            <li>Promotions</li>
          </ul>
        </div>
        <div className={style.column}>
          <ul>
            <li>Restaurants near me</li>
            <li>View all cities</li>
            <li>View all countries</li>
            <li>Pickup near me</li>
            <li>About curlinaryconnect</li>
            <li>Shop groceries</li>
          </ul>
        </div>
        <div className={style.column}>
          <ul>
            <li className={style.language}>🌐 English</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={style.footerBottom}>
        <div className={style.appLinks}>
          <img
            src="https://via.placeholder.com/150x50?text=App+Store"
            alt="App Store"
          />
          <img
            src="https://via.placeholder.com/150x50?text=Google+Play"
            alt="Google Play"
          />
        </div>
        <div className={style.socialLinks}>
          <span className={style.socialLinks1}><img src={facebook} alt="facebook" /></span>
          <span className={style.socialLinks2}><img src={twitter} alt="twitter" /></span>
          <span className={style.socialLinks3}><img src={instagram} alt="instagram" /></span>
        </div>
      </div>

      {/* Privacy Section */}
      <div className={style.privacySection}>
        <p>
          Privacy Policy | Terms | Pricing | Do not sell or share my personal
          information
        </p>
      </div>
    </footer>
  );
};

export default Footer;
