import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_removebg} alt="" />
          <p>If you want a food Reserve click download the application or click the fb page </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/p/Prethegem-foodhouse-san-jose-100064293154542/" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <ul>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>09511887710</li>
            <li>
              <a href="https://www.facebook.com/p/Prethegem-foodhouse-san-jose-100064293154542/" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/p/Prethegem-foodhouse-san-jose-100064293154542/
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 Prethegem Food House - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
