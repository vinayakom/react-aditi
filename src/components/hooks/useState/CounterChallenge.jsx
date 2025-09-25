import { useState } from "react";
import "../Hooks.css";

export const CounterChallenge = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div className="container">
            <h1>useState Challenge !</h1>
            <p>
                Count: <span> {count} </span>
            </p>

            <div>
                <label>
                    Step:
                    <input type="number" value={step} onChange={(i) => setStep(i.target.value)} />
                </label>
            </div>

            <div className="grid-three-cols">
                <button onClick={handleDecrement}> - </button>
                <button onClick={handleReset}> Reset </button>
                <button onClick={handleIncrement}> + </button>
            </div>
        </div>
    );
}
