import React from 'react';
import '../styles/DayViewUndefined.css';
import clouds from '../images/clouds.jpg';

const DayViewUndefined = (props) => {
    return (
        <div className="day-view">
           <img className="background-image" src={clouds} alt="weather image"/>
           <h1 id="intro">Enter Your Location</h1>
        </div>
    )
}

export default DayViewUndefined;