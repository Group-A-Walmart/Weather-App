import { useState } from "react"
import { addUser, retrieveUser } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterForm.css";

const RegisterForm = (props) => {

    const [signIn, setSignIn] = useState(false);
    const _toggleSignIn = () => setSignIn(!signIn);

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

    const handleLogin = e => {
        e.preventDefault();

        let user = {
            username,
            password
        }

        retrieveUser(user);
        setTimeout(() => navigate("/weather-app"), 800);
    }

    return (
        <div>
            {signIn ? 
            <div>
                <form id="RegisterForm" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <input value={username} type="text" placeholder="Username" onChange={handleUsernameChange} />
                    <input value={password} type="password" placeholder="Password" onChange={handlePasswordChange} />
                    <input type="submit" value="Register" />
                </form> 
                <span onClick={_toggleSignIn}>Already registered? Login</span> 
            </div> :
            <div>
                <form id="SignInForm" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <input value={username} placeholder="Username" onChange={handleUsernameChange} />
                    <input value={password} type="password" placeholder="Password" onChange={handlePasswordChange} />
                    <input type="submit" value="Login" />
                </form>
                <span onClick={_toggleSignIn}>Don't have an account? Create one</span>
            </div>
            }
        </div>
    )
}

export default RegisterForm;