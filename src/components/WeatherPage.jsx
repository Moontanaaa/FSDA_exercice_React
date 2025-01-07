
import { useState } from 'react';

const WeatherPage = () => {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const API_KEY = 'ec5f933788ec2e550fc16821c27da3f6';

  // Fonction qui gère le formulaire de soumission pour récupérer la météo
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div>
      <h2>Weather Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};


export default WeatherPage;

