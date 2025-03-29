import React, { useState } from "react";
import { fetchWeather } from "./WeatherApi";

const WeatherForm = ({ onWeatherFetch }) => {
  const [city, setCity] = useState('Lucknow')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const weatherData = await fetchWeather(city)
    onWeatherFetch(weatherData)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
        />
        <button
          className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 transition"
          type="submit"
        >
          Get Weather
        </button>
      </form>
    </div>
  )
}

export default WeatherForm
