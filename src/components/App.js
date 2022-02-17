import { useState } from 'react';
import "../styles/App.css";
import { getWeather, getWeeklyWeather } from '../api';
import SearchBar from "./SearchBar";
import DayView from "./DayView";
import WeeklyView from "./WeeklyView";
import Toggle from "./Toggle";

function App() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isWeeklyView, setIsWeeklyView] = useState(false);
  const _toggleWeeklyView = () => setWeeklyView(!isWeeklyView);
  const [temp, setTemp] = useState(0.0);
  const [weeklyView, setWeeklyView] = useState({});

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }


  const handleStateChange = (e) => {
    setState(e.target.value);
  }

  const handleKeyDown = async (e) => {
    if (e.keyCode === 13) {
      const weatherData = await getWeather(city, state);
      setTemp(weatherData.data.main.temp)
      getWeeklyWeather(city, state).then(res => setWeeklyView(res))
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
        <WeeklyView
          city={city}
          weeklyView={weeklyView}
        /> :
        <DayView />}
      <Toggle handleToggle={_toggleWeeklyView} />
    </div>
  );
}

export default App;
