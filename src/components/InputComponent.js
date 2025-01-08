// InputComponent.js
import React from 'react';

const InputComponent = ({ city, setCity, fetchWeather }) => {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-center">Weather Search</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-primary" onClick={fetchWeather}>
              Get Weather
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
