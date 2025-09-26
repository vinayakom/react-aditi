import { useState } from "react";
import "../Hooks.css"

export const LoginForm = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            username,
            password
        }

        console.log(loginData);
    }

    return (
        <div className="container">
            <div>
                <h1>Login Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" onChange={(e) => setUserName(e.target.value)} value={username} />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};