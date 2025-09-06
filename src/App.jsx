import { useState } from 'react'
import './App.scss'
import Header from './assets/components/header/header';
import { Route, Routes } from 'react-router-dom';
import Home from './assets/pages/home/home';
import countries from './assets/data/data.json'
import CountryPage from './assets/pages/countrypage/countrypage';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }
  const [filteredRegion, setFilteredRegion] = useState("");
  const [filteredCountry, setFilteredCountry] = useState("");
  const resetInput = () => {
    setFilteredCountry("");
  }

  return (
    <div className={darkMode ? 'dark-theme app' : 'light-theme app'}>
       <Header 
        darkMode={darkMode}
        handleToggleDarkMode={toggleDarkMode}
       />
       <Routes>
        <Route path='/' element={<Home 
          setFilteredRegion={setFilteredRegion}
          filteredRegion={filteredRegion}
          countries={countries}
          setFilteredCountry={setFilteredCountry}
          filteredCountry={filteredCountry}
          resetInput={resetInput}
        />}/>
        <Route path="/country/:id" element={<CountryPage />} />
       </Routes>
       
    </div>
  )
}