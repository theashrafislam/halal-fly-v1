"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

// Fix for default marker icon not showing in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const TourMap = () => {
  return (
    <div className="py-10 md:py-16 border-b-2 border-[#E6E6E6]">
      <h6 className="text-3xl md:text-4xl font-bold pb-5">Tour Map</h6>
      <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden">
        <MapContainer
          center={[23.8103, 90.4125]}
          zoom={10}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.8103, 90.4125]}>
            <Popup>Starting point of the tour – Dhaka.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default TourMap;
