import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const position = [52.5080556, 13.3750833]; 

  return (
    <MapContainer center={position} zoom={17} style={{ height: "40vh", width: "100%", borderRadius: "10px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
            Starta Institute by Tel-Ran
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
