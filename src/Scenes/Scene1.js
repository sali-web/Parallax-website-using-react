import React from 'react';
import './Scene1.css'; 
import skyImage2 from './images/sky.png';
import forestImage2 from './images/forest.png';
import SunImage2 from './images/Rectangle35.png';
import MountainImage2 from './images/mountains.png';
import hillImage2 from './images/hills.png';

const Scene1 = () => {
  return (
    <div className='scene1'>
      <div className='rectangular_frame'>
        <div className='circle'>
          <img src={skyImage2} alt='Sky2' className='sky2' />
          <img src={SunImage2} alt='Sun' className='sun2' />
          <img src={MountainImage2} alt='mountain' className='mountains2' />
          <img src={forestImage2} alt='forest1' className='forest2' />
          <img src={hillImage2} alt='hill' className='hill2' />
        </div>
      </div>
    </div>
  );
};

export default Scene1;
