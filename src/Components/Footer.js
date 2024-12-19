import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs";
import '../App.css';
import India from './images/India.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 style={{lineHeight:'3vh'}}>HeartBeat Pvt. Limited</h3>
          <p><b>Chandigarh University, Mohali -140413</b></p>
          <p><b>Email:</b> amt312002@gmail.com.com</p>
          <p><b>Phone:</b> +91 7985345837</p>
        </div>
        <div className="footer-section">
          <h3 style={{lineHeight:'3vh'}}>Country of Origin</h3>
          <p style={{fontSize:'2.5vh'}}><b>INDIA</b></p>
          <img src={India} alt="india" style={{height:'35px',padding:'5px'}}/>
        </div>
        <div className="footer-section">
          <h3 style={{lineHeight:'5vh'}}>Follow Us</h3>
          <div className="social-media-links" style={{width:'15vw'}}>
            <a href="https://www.linkedin.com/in/anoop--kumar/" target="_blank" rel="linkedin">
              <BsLinkedin/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="twitter">
              <BsTwitterX/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="facebook">
              <BsFacebook/>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2023 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;