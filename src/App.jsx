import { useState } from 'react'
import WeatherForm from './components/WeatherForm'
import WeatherDisplay from './components/WeatherDisplay'

function App() {
  const [weather, setWeather] = useState(null)

  const handleWeatherFetch = (weatherData) => {
    setWeather(weatherData)
  }

  return (
    <div 
      className='w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center'
      style={{backgroundImage:`url('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
      <div className='bg-white/80 p-8 rounded-lg shadow-lg'>
        <WeatherForm onWeatherFetch={handleWeatherFetch} />
        <WeatherDisplay weather={weather} />
      </div>
    </div>
  )
}

export default App
