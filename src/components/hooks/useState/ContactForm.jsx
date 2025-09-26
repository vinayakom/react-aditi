import { useState } from "react";
import "../Hooks.css"

export const ContactForm = () => {

    // const [username, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    const [contacts, setContacts] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContacts((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     const loginData = {
    //         username,
    //         email,
    //         message,
    //     }

    //     console.log(loginData);
    // }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(contacts);
    }

    return (
        <div className="container">
            <div>
                <h1>Contact Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        required
                        autoComplete="off"
                        //onChange={(e) => setUserName(e.target.value)}
                        onChange={handleInputChange}
                        value={contacts.username}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                        //onChange={(e) => setEmail(e.target.value)}
                        onChange={handleInputChange}
                        value={contacts.email}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        required
                        autoComplete="off"
                        //onChange={(e) => setMessage(e.target.value)}
                        onChange={handleInputChange}
                        value={contacts.message}
                    />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};