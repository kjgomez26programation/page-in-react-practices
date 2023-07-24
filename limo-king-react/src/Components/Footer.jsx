import React from 'react';
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Fleet</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>

      <div className="footer-social">
        <ul>
          <li><a href="https://www.facebook.com"><FaFacebook /></a></li>
          <li><a href="https://www.twitter.com"><FaTwitter /></a></li>
          <li><a href="https://www.instagram.com"><FaInstagram /></a></li>
        </ul>
      </div>

      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()}|Kjgomez26programation</p>
      </div>
    </footer>
  );
};

export default Footer;

