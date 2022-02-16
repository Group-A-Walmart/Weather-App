import { useState } from 'react';
import "../styles/App.css";
import SearchBar from "./SearchBar";
import Toggle from "./Toggle";
import { getWeather } from '../api';

function App() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isWeeklyView, setWeeklyView] = useState(false);

  const _toggleWeeklyView = () => setWeeklyView(!isWeeklyView);

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
  
  const handleToggle = () => {
    console.log("hello");
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
      {isWeeklyView ? 
      <div>Day View</div> :
      <div>Weekly View</div>}
      <Toggle handleToggle={_toggleWeeklyView}/>
    </div>
  );
}

export default App;
