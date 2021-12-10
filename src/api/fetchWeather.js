import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '364c9d5917e8424053360fb7d0901710'

// fetch data function
// query = the name of the town we wont to search for.
 export const fetchWeather = async (query) => {
  // get response once we make a call to the URL of the API. Destructure the data from the response.
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  })

  return data
}
