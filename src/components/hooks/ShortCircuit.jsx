import "src/index.css";

export const ShortCircuitExample = () => {

    return (
        <section className="container">
            <h1>Short Circuit Evaluation</h1>
            <p>You are logged in</p>
            <div className="grid-three-cols">
                <button>Toggle Login State</button>
                <button>Set User</button>
                <button>Clear User</button>    
            </div>
        </section>
    );
};