import { useState } from "react";
import "../Hooks.css";

export const CounterChallenge = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () => {
        setCount(count + step);
    }

    const handleDecrement = () => {
        setCount(count - step);
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
                    <input type="number" value={step} onChange={(i) => setStep(Number(i.target.value))} />
                </label>
            </div>

            <div className="grid-three-cols">
                <button onClick={handleIncrement} disabled={count >= 100}> + </button>
                <button onClick={handleReset}> Reset </button>
                <button onClick={handleDecrement} disabled={count <= 0}> - </button>
            </div>
        </div>
    );
}
