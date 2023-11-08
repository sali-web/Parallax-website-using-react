import React from 'react';
import "./Scene0.css";
import star from "./images/stars.png"
import sun from "./images/circle.png";
import forestImage from "./images/forest.png";
import Land from "./images/land.png";
import Temple from "./images/temple.png";
import hillImage from "./images/hill.png";
import Buttons from '../components/Buttons/Button';
import Wave from './images/wave.png'

import { Link } from 'react-router-dom';

const Scene = () => {
  return (
    <div className='scene'>
      <div className="background-image">
        {/* Static Background */}
      </div>
      <img src={star} alt="Star" className='star' />
      <img src={sun} alt="Sun" className='sun' />
      <img src={Land} alt="Land" className='land' />
      <img src={Temple} alt="Temple" className='temple' />
      <img src={forestImage} alt="forest1" className='forest' />
      <img src={hillImage} alt="hill" className='hill' />
      <img src={Wave} alt="wave" className='wave' />
      <div className="explore-nepal">
        <h2 className='ex-nepal'>Explore Nepal</h2>
        <h1 className='embark'>
        Embark on a Virtual Voyage: Unveiling the Beauty of Nepal!
        </h1>
        <div className="get-started">
        <Link to="/map">
          <Buttons mode="hover" size="small">
            Get Started
          </Buttons>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Scene;