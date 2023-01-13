import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="foote">
      <div className="footer__container container">
        <h1 className="footer__title">Shukla</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#Portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/p_b_shukla/"
            className="footer__social-link"
            
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="footer__social-link"
          
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &copy; Bhushan-apps {new Date().getFullYear()} All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
