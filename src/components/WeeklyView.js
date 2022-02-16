import { kelvinToFahrenheit } from "../helpers";

const WeeklyView = (props) => {
    console.log(props.weeklyView)
    let { daily, current } = props.weeklyView;
    return (
        <div>
            {current && Math.trunc(kelvinToFahrenheit(current.temp))}
            {daily && daily.map((day, i) => {
                return (
                    <div key={i} style={{ display: "inline-flex" }}>
                        <div style={{ display: "flex", flexDirection: 'column' }}>
                            <p style={{ marginRight: 15 }}>{Math.trunc(kelvinToFahrenheit(day.temp.min))}</p>
                            <p>{Math.trunc(kelvinToFahrenheit(day.temp.max))}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WeeklyView;