import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "./Map.css"; // Import your custom CSS
import L from "leaflet"; // Import the 'L' object from the 'leaflet' package

export const Map = () => {
  const markers = [
    {
      geocode: [27.6735697, 85.3223784],
      popUp: "Krishna Mandir",
      iconUrl: "url-to-marker-icon-1.png", // Replace with the actual URL of your marker icon
    },
    {
      geocode: [27.6794234, 85.2739021],
      popUp: "Bhag bhairav",
      iconUrl: "Krishna", // Replace with the actual URL of your marker icon
    },
    {
      geocode: [27.680058, 85.272057],
      popUp: "Uma Maheshori",
      iconUrl: "Bhag bhairav", // Replace with the actual URL of your marker icon
    },
    {
      geocode: [27.6752289, 85.3219734],
      popUp: "Golden Temple",
      iconUrl: "url-to-marker-icon-4.png", // Replace with the actual URL of your marker icon
    },
  ];

  return (
    <MapContainer
      center={markers[0].geocode}
      zoom={8}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Hide the zoom in and zoom out buttons using CSS */}
      <style>
        {`
    .leaflet-top.leaflet-left .leaflet-control-zoom-in,
    .leaflet-top.leaflet-left .leaflet-control-zoom-out {
      display: none;
    }
  `}
      </style>

      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geocode}
            icon={L.icon({
              iconUrl: "icon.svg",
              iconSize: [41, 61],
              iconAnchor: [12, 41],
            })}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
