import { useState, useEffect} from 'react';
import { getWeather } from '../api';

const SearchBar = (props) => {

    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    let stateCodes = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

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
        <div>
            <input onChange={handleCityChange} value={city} placeholder="Enter City" onKeyDown={handleKeyDown} />
            
            <select onChange={handleStateChange}>
                {stateCodes.map(code =>
                <option key={stateCodes.indexOf(code)} value={code}>{code}</option>
                )}
            </select>
        </div>
    )
}

export default SearchBar;