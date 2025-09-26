import { useState } from "react";
import "../Hooks.css"

export const RegistrationForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "phone":
                setPhoneNumber(value);
                break;
            default:
                break;
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        };

        console.log("Form Data Submitted: ", formData);        
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        First Name:
                    </label>
                    <input type="text" name="firstName" placeholder="Enter First Name" required value={firstName} onChange={handleInputChange} />

                    <label htmlFor="lastName">
                        Last Name:
                    </label>
                    <input type="text" name="lastName" placeholder="Enter Last Name" required value={lastName} onChange={handleInputChange} />

                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="text" name="email" placeholder="Enter Email" required value={email} onChange={handleInputChange} />

                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password" name="password" placeholder="Enter Password" required value={password} onChange={handleInputChange} />

                    <label htmlFor="phone">
                        Phone Number:
                    </label>
                    <input type="text" name="phone" placeholder="Enter Phone" required value={phoneNumber} onChange={handleInputChange} />

                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}> Terms & Privacy</a>.
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="signupbtn">Register</button>
                    </div>
                </div>
            </form>
        </>
    );
}