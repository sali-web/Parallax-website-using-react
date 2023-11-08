import templeImage from "./images/temple.png";
import slideIcon from "./images/seemore.png";
const services = () => {
    return (
      <div className="workpage">
      <div id='services' className="services-section">
      <div className="slide-icon">
          <img src={slideIcon} alt="Slide Icon" />
        </div>
          <p className="OurServices">Our Services</p>
          <p className="OServices">Our <span>Services</span></p>
  
        {/* Create a container for the frame */}
        <div className="frame-container">
          {/* Rectangle with text overlapping at the bottom */}
          <div className="frame">
            <div className="image">
              <img src={templeImage} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4>Name of heritage</h4>
              <h5>Method used</h5>
            </div>
          </div>
  
          {/* Repeat the frame for more images */}
          <div className="frame">
            <div className="image">
              <img src={templeImage} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4>Name of heritage</h4>
              <h5>Method used</h5>
            </div>
          </div>
          
          <div className="frame">
            <div className="image">
              <img src={templeImage} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4>Name of heritage</h4>
              <h5>Method used</h5>
            </div>
          </div>
          {/* Add more frames as needed */}
        </div>
      </div>
      </div>
    );
  };
  
  export default services;
  