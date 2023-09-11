import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <h5>Developed By Dheeraj Tripathi</h5>
      <div className="social-icons">
        <a href="https://www.facebook.com/dheeraj.tripathi.7524879">
          <FaFacebook className="icon" />
        </a>
        <a href="www.linkedin.com/in/dheerajajitt">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/dheerajaj">
        <FaGithub className='icon'></FaGithub>
        </a>
        <a href="https://www.instagram.com/tripathi_dheeraj_/">
          <FaInstagram className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
