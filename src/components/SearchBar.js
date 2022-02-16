import { useState, useEffect} from 'react';

const SearchBar = (props) => {
    
    let stateCodes = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

    return (
        <div>
            <input onChange={props.handleCityChange} value={props.city} placeholder="Enter City" onKeyDown={props.handleKeyDown} />
            
            <select>
                {stateCodes.map(code =>
                <option key={stateCodes.indexOf(code)} value={code}>{code}</option>
                )}
            </select>
        </div>
    )
}

export default SearchBar;