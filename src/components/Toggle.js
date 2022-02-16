import { useState, useEffect} from 'react';
import '../styles/Toggle.css';

const Toggle = (props) => {
    const [state, setState] = useState("");

    return (
        <div>
            <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle;