import React from "react";
import topImage from "./images/topfooter.png";
import bottomImage from "./images/bottomfooter.png";
import FacebookIcon  from "./images/facebookIcon.png";
import LinkedinIcon  from "./images/instaIcon.png";
import TwitterIcon from "./images/TwitterIcon.png";
import "./styles.css";


const Footer = () => {
    const topImageStyle = {
      backgroundImage: `url(${topImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "200px", // Adjust the height as needed
    };
  
    const bottomImageStyle = {
      backgroundImage: `url(${bottomImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "200px", // Adjust the height as needed
    };
  
  
    return (
      <div className="footer">
        <div className="footer-mask">
        <div class="footer-upper">
          <div class="footer-text">
            <h3>Schedule a Demo</h3>
            <p>Experience the immense real-time beauty of heritage of Nepal</p>
            <a href="/readmore">Read More</a>
          </div>
        </div>
        <div class="footer-lower">
          <div class="footer-column">
            <h4>Get Started</h4>
            <p>Get started with our platform and explore amazing heritage sites.</p>
            <div class="email-input">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <ul>
              <li>3D Modeling</li>
              <li>Virtual Tourism</li>
              <li>Augmented Reality</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Startup Program</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Follow Us</h4>
            <p>araniko@gmail.com</p>
            <p>+123-456-7890</p>
            <div class="social-icons">
              <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
              <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
              <a href="#"><img src={LinkedinIcon} alt="LinkedIn" /></a>
            </div>
          </div>
          </div>
      </div>
        <div className="top-image" style={topImageStyle}></div>
        <div className="bottom-image" style={bottomImageStyle}></div>
        <p className="copyright">
          &copy; 2023 All the rights are reserved by{" "}
          <a
            href="https://aaraniko3d.co"
            style={{ color: "white", textDecoration: "none" }}
          >
            araniko3d.co
          </a>
        </p>
      </div>
    );
  };
  
  export default Footer;

