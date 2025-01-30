import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl; // Remove existing icon configuration
// Updated icon configuration using direct URLs
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const Footer = () => {
  const mumbaiPosition = [19.0760, 72.8777]; // Mumbai coordinates

  return (
    <footer className="mt-auto">
      <div className="w-full bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          {/* <div className="h-[300px] w-full">
            <MapContainer 
              center={mumbaiPosition} 
              zoom={12} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={mumbaiPosition} />
            </MapContainer>
          </div> */}
          <div className="text-center mt-4">
            <p>© 2024 PotholePatrol. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;