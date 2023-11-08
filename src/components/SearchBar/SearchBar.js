import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import './SearchBar.css';

export const SearchBar = () => {
  const navigate = useNavigate();

  const navigateToDescriptionPage = () => {
    navigate('/description-page'); 
  };

  return (
    <div className="search-container">
      <h3 className="text-center">LIST OF DOCUMENTED AREAS</h3>
      <div className="flex searchbar justify-between">
        <input type="text" placeholder="Monuments" />
        <img src="searchbar.svg" alt="" className="border-none" />
      </div>
      <div>
        <div className="info">
          <div className="flex m-0 p-0 gap-2">
            <img src="monument.svg" alt="" />
            <h4 className="m-0 p-0">Bhaktapur Durbar Square</h4>
          </div>
          <p className="m-0 p-0">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna...
          </p>
          <div className="flex m-0 p-0 right gap-2">
            <div className="flex m-0 p-0 gap-2" onClick={navigateToDescriptionPage}>
              <img src="info.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Details</p>
            </div>
            <div className="flex m-0 p-0 gap-2">
              <img src="location.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Map</p>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="flex m-0 p-0 gap-2">
            <img src="monument.svg" alt="" />
            <h4 className="m-0 p-0">Bhaktapur Durbar Square</h4>
          </div>
          <p className="m-0 p-0">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna...
          </p>
          <div className="flex m-0 p-0 right gap-2">
            <div className="flex m-0 p-0 gap-2" onClick={navigateToDescriptionPage}>
              <img src="info.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Details</p>
            </div>
            <div className="flex m-0 p-0 gap-2">
              <img src="location.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Map</p>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="flex m-0 p-0 gap-2">
            <img src="monument.svg" alt="" />
            <h4 className="m-0 p-0">Bhaktapur Durbar Square</h4>
          </div>
          <p className="m-0 p-0">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna...
          </p>
          <div className="flex m-0 p-0 right gap-2">
            <div className="flex m-0 p-0 gap-2" onClick={navigateToDescriptionPage}>
              <img src="info.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Details</p>
            </div>
            <div className="flex m-0 p-0 gap-2">
              <img src="location.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Map</p>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="flex m-0 p-0 gap-2">
            <img src="monument.svg" alt="" />
            <h4 className="m-0 p-0">Bhaktapur Durbar Square</h4>
          </div>
          <p className="m-0 p-0">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna...
          </p>
          <div className="flex m-0 p-0 right gap-2">
            <div className="flex m-0 p-0 gap-2" onClick={navigateToDescriptionPage}>
              <img src="info.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Details</p>
            </div>
            <div className="flex m-0 p-0 gap-2">
              <img src="location.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Map</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
