import "../Hooks.css";

export const Counter = () => {
    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h1>useState Hook!</h1>
            <br />
            <p>Count</p>
            <button className="button">Increment</button>
        </div>

    );
}