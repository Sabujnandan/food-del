import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo2} alt="" />
          <p>
          Sabzsty invites you to indulge in a unique dining experience where fresh, flavorful dishes are crafted from the finest ingredients. Our diverse menu offers something for every palate, ensuring an unforgettable culinary adventure in every bite. Join us and discover the art of exceptional dining.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <a href=""><li>Home</li></a>
                <a href="#footer"><li>About Us</li></a>
                <a href=""><li>Delivery</li></a>
                <a href="#footer"><li>Privacy Policy</li></a>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-83335860037</li>
                <li>sabujnandan41@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © sabzsty.com - All rights reserved.</p>
    </div>
  );
};

export default Footer;
