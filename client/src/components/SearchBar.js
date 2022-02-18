import "../styles/SearchBar.css";

const SearchBar = (props) => {
    
    let stateCodes = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

    return (
        <div className="search-functions">
            <input className="searchbar" onChange={props.handleCityChange} value={props.city} placeholder="Enter City" onKeyDown={props.handleKeyDown} />
            <select className="state-select" onChange={props.handleStateChange}>
                {stateCodes.map(code =>
                <option className="state-select-dropdown" key={stateCodes.indexOf(code)} value={code}>{code}</option>
                )}
            </select>
        </div>
    )
}

export default SearchBar;