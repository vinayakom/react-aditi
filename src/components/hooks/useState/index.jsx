import { useState } from "react";
import "../Hooks.css";

export const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h1>useState Hook!</h1>
            <br />
            <p>{count}</p>
            <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}