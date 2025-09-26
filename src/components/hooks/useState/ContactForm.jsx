import { useState } from "react";
import "../Hooks.css"

export const ContactForm = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            username,
            password,
            message,
        }

        console.log(loginData);
    }

    return (
        <div className="container">
            <div>
                <h1>Contact Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" onChange={(e) => setUserName(e.target.value)} value={username} />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} />

                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" required autoComplete="off" onChange={(e) => setMessage(e.target.value)} value={message} />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};