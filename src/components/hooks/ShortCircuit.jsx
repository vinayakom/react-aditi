import { useState } from "react";
import "./Hooks.css";

export const ShortCircuitExample = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState();

    return (
        <section className="container">
            <h1>Short Circuit Evaluation</h1>
            {isLoggedIn && <p>You are logged in!</p>}
            {user ? `Hello ${user}` : "Please log in!"}
            <div className="grid-three-cols">
                <button className="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button className="button" onClick={() => setUser("Aditi")}>Set User</button>
                <button className="button" onClick={() => setUser("")}>Clear User</button>
            </div>
        </section>
    );
};