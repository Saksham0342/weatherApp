
// const api_key = 'ff42d18c47164c249f872639240208'
// const base_url = 'https://api.weatherapi.com/'

export const fetchWeather = async(city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ff42d18c47164c249f872639240208&q=${city}`)
    const data = await response.json()
    return data
}

