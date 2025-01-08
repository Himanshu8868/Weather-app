import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About WeatherApp</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is WeatherApp?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>WeatherApp</strong> is a user-friendly application that provides real-time weather updates for any city in the world. Simply enter the city name, and WeatherApp will fetch the latest weather data, including temperature, weather conditions, and more.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How does it work?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              WeatherApp uses the OpenWeatherMap API to fetch weather data. When you enter a city name, the app sends a request to the API, which returns the current weather information for that location. The app then displays this information in a user-friendly format.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Features
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>Real-time weather updates</li>
                <li>Search weather by city name</li>
                <li>Use current location to get weather updates</li>
                <li>Displays temperature, weather conditions, and more</li>
                <li>Responsive design for mobile and desktop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;