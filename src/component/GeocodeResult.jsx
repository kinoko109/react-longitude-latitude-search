import React from "react";

const GeocodeResult = ({ address, lat, lng }) => (
  <ul className="geocode-result">
    <li>住所：{address}</li>
    <li>緯度{lat}</li>
    <li>軽度{lng}</li>
  </ul>
);

export default GeocodeResult;
