import { useState } from 'react';
import "../styles/App.css";
import SearchBar from "./SearchBar";
import DayView from "./DayView";
import Toggle from "./Toggle";
import { getWeather } from '../api';


function App() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [temp, setTemp] = useState(0.0);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  const handleStateChange= (e) => {
      setState(e.target.value);
  }

  const handleKeyDown = async(e) => {
      if (e.keyCode === 13) {
          const weatherData = await getWeather(city,state);
          setTemp(weatherData.data.main.temp);
          console.log(temp);
      }
  }

  return (
    <div className="App">
      <SearchBar
        handleStateChange={handleStateChange}
        handleCityChange={handleCityChange}
        handleKeyDown={handleKeyDown}
        city={city}
        state={state}
      />
      <DayView/>
      <Toggle />
    </div>
  );
}

export default App;
