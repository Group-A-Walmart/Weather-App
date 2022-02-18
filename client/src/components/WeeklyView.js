import { kelvinToFahrenheit, getWeatherPic } from "../helpers";
import "../styles/WeeklyView.css";

const WeeklyView = (props) => {
    let { daily } = props.weeklyView;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date();
    let currentDay;
    return (
        <div id="WeeklyView">
            <h1 style={{ color: "black" }}>8 Day Weather</h1>
            {daily && daily.map((day, i) => {
                const { weather } = day;
                let imgURL = getWeatherPic(weather[0].main);
                return (
                    <div key={i} className="daily-weather-container">
                        <div className="daily-weather-cards">
                            <img src={imgURL} />
                            <div className="daily-weather">
                                <p id="day">{currentDay = days[date.getDay()+i]}</p>
                                <p>High: {Math.trunc(kelvinToFahrenheit(day.temp.max))}°</p>
                                <p>Low: {Math.trunc(kelvinToFahrenheit(day.temp.min))}°</p>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WeeklyView;