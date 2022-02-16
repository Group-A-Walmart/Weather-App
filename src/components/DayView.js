import React from 'react';
import clouds from '../images/clouds.jpg';
import '../styles/DayView.css';


const DayView = (props) => {
    return (
        <div className="day-view">
           <img src={clouds} alt="weather image"/>
           <h1>72°</h1>
           <h2>Fayetteville, AR</h2>
        </div>
    )
}

export default DayView;