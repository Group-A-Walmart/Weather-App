import { kelvinToFahrenheit, getWeatherPic } from "../helpers";
import "../styles/WeeklyView.css";

const WeeklyView = (props) => {
    console.log(props.weeklyView)
    let { daily } = props.weeklyView;
    return (
        <div id="WeeklyView">
            {daily && daily.map((day, i) => {
                const { weather } = day;
                let imgURL = getWeatherPic(weather[0].main);
                return (
                    <div key={i} className="daily-weather-container">
                        <div className="daily-weather-cards">
                            <img src={imgURL} />
                            <div className="daily-weather">
                                <p>Low: {Math.trunc(kelvinToFahrenheit(day.temp.min))}</p>
                                <p>High: {Math.trunc(kelvinToFahrenheit(day.temp.max))}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WeeklyView;