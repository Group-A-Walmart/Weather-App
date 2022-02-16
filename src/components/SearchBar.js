import { useState, useEffect} from 'react';
import { getWeather } from '../api';

const SearchBar = (props) => {

    const [city, setCity] = useState("");
    let stateCodes = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            getWeather(city);
        }
    }

    return (
        <div>
            <input onChange={handleChange} value={city} placeholder="Enter City" onKeyDown={handleKeyDown} />
        </div>
    )
}

export default SearchBar;