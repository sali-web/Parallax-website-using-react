import React from 'react';
import "./Scene0.css";
import skyImage1 from "./images/sky.png";
import forestImage from "./images/forest.png";
import SunImage from "./images/Rectangle35.png";
import VectorImage from "./images/Vector31.png";
import MountainImage from "./images/mountains.png";
import hillImage from "./images/hills.png";

const Scene0 = () => {
  return (
    <div className='scene'>
      <div className="background-image">
        {/* Static Background */}
      </div>
      <img src={skyImage1} alt="Sky1" className='sky' />
      <img src={SunImage} alt="Sun" className='Rectangle35' />
      <img src={VectorImage} alt="vector" className='Vector31' />
      <img src={MountainImage} alt="mountain" className='mountains' />
      <img src={forestImage} alt="forest1" className='forest' />
      <img src={hillImage} alt="hill" className='hill' />
    </div>
  )
}

export default Scene0;
