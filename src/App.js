import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputComponent from './components/InputComponent';
import WeatherDisplayComponent from './components/WeatherDisplayComponent';
import Navbar from './components/Navbar';import { getCurrentLocation, fetchWeatherByCoordinates } from './components/Location';
import About from './components/About';

const App = () => {
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getCurrentLocation(
      position => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoordinates(latitude, longitude)
          .then(data => {
            setWeatherData(data);
            setAlert({ message: `Weather at your location:${weatherData.name} , ${data.weather[0].description}, ${data.main.temp}°C`, type: 'primary' });
          })
          .catch(err => {
            setAlert({ message: err.message, type: 'danger' });
          });
      },
      error => {
        setAlert({ message: 'Failed to get your location. Please enter a city name.', type: 'danger' });
      }
    );
  }, []);

  const fetchWeather = async () => {
    if (!city) {
      setAlert({ message: 'Please enter a city name.', type: 'danger' });
      return;
    }
    setAlert({ message: '', type: '' });
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setAlert({ message: `Weather in ${city}: ${response.data.weather[0].description}, ${response.data.main.temp}°C`, type: 'primary' });
    } catch (err) {
      setAlert({ message: 'Failed to fetch weather data. Please try again.', type: 'danger' });
      resetWeatherData();
    }
  };

  const resetWeatherData = () => {
    if (weatherData) {
      setWeatherData(null);
    }
  };

  const getBackgroundImage = (weatherDescription) => {
    switch (weatherDescription) {
      case 'clear sky':
        return 'url(https://tse1.mm.bing.net/th?id=OIG2.OAh1VvqBC6yPnXf35Tub&pid=ImgGn)';
      case 'few clouds':
        return 'https://wallpaperaccess.com/full/398870.jpg';
      case 'scattered clouds':
        return 'url(https://th.bing.com/th?q=Sunset+with+a+Few+Scattered+Clouds&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247)';
      case 'broken clouds':
        return 'url(https://th.bing.com/th?q=Sunset+with+a+Few+Scattered+Clouds&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247)';
      case 'shower rain':
        return 'url(https://cdn.pixabay.com/photo/2022/04/25/05/48/rain-7155121_640.jpg)';
      case 'rain':
        return 'url(https://cdn.pixabay.com/photo/2013/07/12/15/03/clouds-149344_640.png)';
      case 'thunderstorm':
        return 'url(https://cdn.pixabay.com/photo/2016/10/25/12/28/thunderstorm-1768742_640.jpg)';
      case 'snow':
        return 'url(https://cdn.pixabay.com/photo/2014/12/02/22/05/snowflakes-554635_640.jpg)';
      case 'overcast clouds':
        return 'url(https://cdn.pixabay.com/photo/2016/10/25/12/28/thunderstorm-1768742_640.jpg)';
      default:
        return 'url(https://cdn.pixabay.com/photo/2014/12/02/22/05/snowflakes-554635_640.jpg)';
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="container mt-7 weather-section"
        style={{
          backgroundImage: weatherData ? getBackgroundImage(weatherData.weather[0].description) : 'none',
        }}
      >
        <div className="text-center mb-4">
          <h1 className="display-4">Weather App</h1>
        </div>
        <div className="mb-3">
          <InputComponent alert={alert.message} city={city} setCity={setCity} fetchWeather={fetchWeather} />
        </div>
        {alert.message && (
          <div className={`alert alert-${alert.type}`} role="alert">
            {alert.message}
          </div>
        )}
        <WeatherDisplayComponent weatherData={weatherData} />
      </div>
      <About />
    </>
  );
};

export default App;