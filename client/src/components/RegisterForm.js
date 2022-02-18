import { useState } from "react"
import { addUser } from "../api";
import "../styles/RegisterForm.css";

const RegisterForm = (props) => {

    const [username, setUsername] = useState("");
    const handleUsernameChange = ({target}) => {
        let newUsername = target.value;
        setUsername(newUsername);
    }

    const [password, setPassword] = useState("");
    const handlePasswordChange = ({target}) => {
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
    }

    return (
        <form id="RegisterForm" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input value={username} placeholder="Username" onChange={handleUsernameChange}  />
            <input value={password} placeholder="Password" onChange={handlePasswordChange} />
            <input type="submit" value="Register" />
        </form>
    )
}

export default RegisterForm;