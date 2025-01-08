// WeatherDisplayComponent.js
import React from 'react';
const WeatherDisplayComponent = ({ weatherData }) => {
  return (
    <div className="weather-container">
      {weatherData ? (
        <div className="weather-card animate">
          <h3 className="city-name">{weatherData.name}</h3>
          <p className="weather-info">
            Temperature: {weatherData.main.temp}°C</p>
          <p className="weather-info">
            Humidity: {weatherData.main.humidity}%</p>
          <p className="weather-info">
            Weather: {weatherData.weather[0].description}
          </p>
        </div>
      ) : (
        <p className="no-data ">No weather data available.</p>
      )}
    </div>
  );
};

export default WeatherDisplayComponent;
