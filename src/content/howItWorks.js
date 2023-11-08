import React from 'react';
import "./styles.css"; 

import OptimizeNerf from "./images/OptimizeNerf.png";
import CaptureImages from "./images/captureImage.png";
import GenerateVideos from "./images/generateVideos.png";
import slideIcon from "./images/seemore.png";

const YourNewPage = () => {
  return (
    <div className="how_it_works_page">
      <div id="how_it_works" className="Works-section">
        <div className="slide-icon">
          <img src={slideIcon} alt="Slide Icon" />
        </div>
        <p className="HowItWorks">How It Works</p>
        <p className="ItWorks">How It <span>Works</span></p>

        <div className="curved-rectangles">
          <div className="curved-rectangle">
            <img src={CaptureImages} alt="Work 1" />
            <h4>Capture Images</h4>
          </div>

          <div className="curved-rectangle">
            <img src={OptimizeNerf} alt="Work 2" />
            <h4>Optimize Nerf</h4>
          </div>

          <div className="curved-rectangle">
            <img src={GenerateVideos} alt="Work 3" />
            <h4>Generate Videos</h4>
          </div>
          {/* Add more curved rectangles as needed */}
        </div>
      </div>
    </div>
  );
};

export default YourNewPage;
