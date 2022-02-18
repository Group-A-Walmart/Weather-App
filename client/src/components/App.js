import { useState } from 'react';
import "../styles/App.css";
import { getWeather, getWeeklyWeather } from '../api';
import SearchBar from "./SearchBar";
import DayView from "./DayView";
import WeeklyView from "./WeeklyView";
import Toggle from "./Toggle";
import DayViewUndefined from "./DayViewUndefined"

function App() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isWeeklyView, setIsWeeklyView] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [weeklyView, setWeeklyView] = useState({});
  const _toggleWeeklyView = () => setIsWeeklyView(!isWeeklyView);


  const handleCityChange = (e) => {
    setCity(e.target.value);
  }


  const handleStateChange = (e) => {
    setState(e.target.value);
  }


  const handleKeyDown = async(e) => {
      if (e.keyCode === 13) {
          const weatherData = await getWeather(city,state);
          setWeatherData(weatherData);
          getWeeklyWeather(city, state).then(res => setWeeklyView(res))
          console.log(weatherData);
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
      {isWeeklyView ?
        <WeeklyView
          city={city}
          weeklyView={weeklyView}
        /> :
        Object.keys(weatherData).length>0 ? <DayView weatherData={weatherData}
          city={city}
          state={state} /> : <DayViewUndefined/>}
      <Toggle handleToggle={_toggleWeeklyView} />
    </div>
  );
}

export default App;
