import '../styles/Toggle.css';

const Toggle = (props) => {

    return (
        <div className="toggle">
            <span className="toggle-text">Day/Weekly View:</span>
            <label className="switch">
            <input type="checkbox" onClick={props.handleToggle}/>
            <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle;