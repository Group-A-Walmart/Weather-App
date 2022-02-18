import { useState } from "react"
import { addUser } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterForm.css";

const RegisterForm = (props) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const handleUsernameChange = ({ target }) => {
        let newUsername = target.value;
        setUsername(newUsername);
    }

    const [password, setPassword] = useState("");
    const handlePasswordChange = ({ target }) => {
        let newPassword = target.value;
        setPassword(newPassword);
    }

    const handleSubmit = e => {
        e.preventDefault();

        let newUser = {
            username,
            password
        }

        addUser(newUser);
        setTimeout(() => navigate("/weather-app"), 800);
    }

    return (
        <form id="RegisterForm" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input value={username} placeholder="Username" onChange={handleUsernameChange} />
            <input value={password} placeholder="Password" onChange={handlePasswordChange} />
            <input type="submit" value="Register" />
        </form>
    )
}

export default RegisterForm;