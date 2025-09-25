import { useState } from "react";
import "../Hooks.css";

export const ControlledForm = () => {

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // const dataValue = document.querySelector("#inputName").value;
        // console.log(dataValue);        
        console.log(name);
    }

    return (
        <section className="container">
            <h1>Controlled Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input id="inputName" type="text" name="name" value={name} onChange={handleChange}/>
                </label>
                <br />
                <button type="submit" className="button">Submit</button>
            </form>
        </section>
    );
};
