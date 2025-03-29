import React from "react";

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <p className="text-white">Please enter a city to get the weather information.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold mb-2">Location: {weather.location.name}</h2>
      <p className="text-lg mb-1">Temperature (C): {weather.current.temp_c}°C</p>
      <p className="text-lg mb-1">Temperature (F): {weather.current.temp_f}°F</p>
      <p className="text-lg mb-2">
        Weather Condition: {weather.current.condition.text}
        <img className="inline ml-2" src={weather.current.condition.icon} alt={weather.current.condition.text} />
      </p>
      <p className="text-lg mb-1">Wind Speed: {weather.current.wind_kph} kph</p>
      <p className="text-lg">Humidity: {weather.current.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay
