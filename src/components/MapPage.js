import React from "react";
import { Map } from "../components/Map/Map.js";
import { SearchBar } from "../components/SearchBar/SearchBar.js";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "./MapPage.css"; // Import your custom CSS

const MapPage = () => {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className="map-container">
        <Map />
      </div>
    </>
  );
};

export default MapPage;
