import { useState } from 'react';
import "../styles/App.css";
import SearchBar from "./SearchBar";
import DayView from "./DayView";
import Toggle from "./Toggle";
import { getWeather } from '../api';


function App() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  const handleStateChange= (e) => {
      setState(e.target.value);
  }

  const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
          getWeather(city, state);
      }
  }

  return (
    <div className="App">
      <DayView/>
      <SearchBar
        handleStateChange={handleStateChange}
        handleCityChange={handleCityChange}
        handleKeyDown={handleKeyDown}
        city={city}
        state={state}
      />
      <Toggle />
    </div>
  );
}

export default App;
