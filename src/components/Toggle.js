import '../styles/Toggle.css';

const Toggle = (props) => {

    return (
        <div>
            <label className="switch">
            <input type="checkbox" onClick={props.handleToggle}/>
            <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle;