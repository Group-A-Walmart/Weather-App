import { useState } from 'react';
import "../styles/App.css";
import SearchBar from "./SearchBar";
import DayView from "./DayView";
import Toggle from "./Toggle";
import { getWeather } from '../api';


function App() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isWeeklyView, setWeeklyView] = useState(false);
  const _toggleWeeklyView = () => setWeeklyView(!isWeeklyView);
  const [weatherData, setWeatherData] = useState([]);


  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  const handleStateChange= (e) => {
      setState(e.target.value);
  }

  const handleKeyDown = async(e) => {
      if (e.keyCode === 13) {
          const weatherData = await getWeather(city,state);
          setWeatherData(weatherData);
          console.log(weatherData);
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
      <div>Weekly View</div> :
      <DayView 
        weatherData={weatherData}
        city={city}
        state={state}
        />}
      <Toggle handleToggle={_toggleWeeklyView}/>
    </div>
  );
}

export default App;
