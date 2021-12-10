import React, { useState } from 'react'
import './App.css'

import { fetchWeather } from './api/fetchWeather'

const App = () => {
  const [query, setQuery] = useState('')

  // fetch the data after we click something
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)
      console.log(data)
    }
  }

  return (
    <div className='main-container'>
      <input
        type='text'
        className='search'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
    </div>
  )
}

export default App
