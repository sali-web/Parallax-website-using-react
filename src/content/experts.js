import React, { useState } from 'react';
import './styles.css';
import Expert1 from "./images/expert1.png";
import Expert2 from "./images/expert2.png";
import Expert3 from "./images/expert3.png";
import BgImage from "./images/slantRectangle.png";
import NavArrow from "./images/meetallmembers.png";
import FacebookIcon from "./images/facebookIcon.png"; 
import LinkedinIcon from "./images/instaIcon.png";
import TwitterIcon from "./images/TwitterIcon.png";

const experts = () => {
  return (
    <div className="expertpage">
      <div id="experts" className="experts-section">
      <div className="nav-arrow">
          <img src={NavArrow} alt="Slide Icon" />
        </div>
        <p className="OurExperts">Our Experts</p>
        <p className="OExperts">Our <span>Experts</span></p>

        {/* Create a container for the frames */}
        <div className="expert-container">
          {/* Frame with background image and expert image */}
          <div className="expert-frame">
            <div className="background-image">
              <img src={BgImage} alt="Expert Background" />
            </div>
            <div className="expert-image">
              <img src={Expert1} alt="Expert" />
            </div>
            <div className="expert-social-icons">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={LinkedinIcon} alt="LinkedIn" />
              <img src={TwitterIcon} alt="Twitter" />
            </div>
            <div className="expert-details">
              <div className="expert-name">Chaya Sharma</div>
              <div className="expert-position">CEO</div>
            </div>
          </div>

          {/* Repeat the frame for more experts */}
          <div className="expert-frame">
            <div className="background-image">
              <img src={BgImage} alt="Expert Background" />
            </div>
            <div className="expert-image">
              <img src={Expert2} alt="Expert" />
            </div>
            <div className="expert-social-icons">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={LinkedinIcon} alt="LinkedIn" />
              <img src={TwitterIcon} alt="Twitter" />
            </div>
            <div className="expert-details">
              <div className="expert-name">Daya Harma</div>
              <div className="expert-position">COO</div>
            </div>
          </div>

          <div className="expert-frame">
            <div className="background-image">
              <img src={BgImage} alt="Expert Background" />
            </div>
            <div className="expert-image">
              <img src={Expert3} alt="Expert" />
            </div>
            <div className="expert-social-icons">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={LinkedinIcon} alt="LinkedIn" />
              <img src={TwitterIcon} alt="Twitter" />
            </div>
            <div className="expert-details">
              <div className="expert-name">Ram Shyam</div>
              <div className="expert-position">HR</div>
            </div>
          </div>

          {/* Add more frames for additional experts as needed */}
        </div>
      </div>
    </div>
  );
};

export default experts;
