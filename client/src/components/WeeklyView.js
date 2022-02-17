import { kelvinToFahrenheit, getWeatherPic } from "../helpers";
import "../styles/WeeklyView.css";

const WeeklyView = (props) => {
    let { daily, current } = props.weeklyView;
    return (
        <div id="WeeklyView">
            <h1 style={{ color: "black" }}>8 Day Weather</h1>
            {daily && daily.map((day, i) => {
                const { weather } = day;
                let imgURL = getWeatherPic(weather[0].main);
                return (
                    <div key={i} className="daily-weather-container">
                        <div className="daily-weather-cards">
                            {i === 0 ?
                                <div className="current-weather-card">
                                    <img src={imgURL} />
                                    <div className="current-weather">
                                        <p>{Math.trunc(kelvinToFahrenheit(current.temp))}℉</p>
                                    </div>
                                </div> :
                                <>
                                    <img src={imgURL} />
                                    <div className="daily-weather">
                                        <p>Low: {Math.trunc(kelvinToFahrenheit(day.temp.min))}</p>
                                        <p>High: {Math.trunc(kelvinToFahrenheit(day.temp.max))}</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WeeklyView;