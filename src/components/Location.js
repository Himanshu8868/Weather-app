import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getCurrentLocation = (successCallback, errorCallback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    errorCallback(new Error('Geolocation is not supported by this browser.'));
  }
};

export const fetchWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch weather data.');
  }
};