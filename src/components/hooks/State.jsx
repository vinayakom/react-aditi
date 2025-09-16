import { useState } from "react";

export const State = () => {

    // let value = 0;

    // const handleButtonClick = () => {
    //     value = value + 1;
    //     console.log("Button Clicked", value);
    // };
    //console.log(useState());

    const [count, setCount] = useState(0);
    console.log("Parent Component Rendered");
    const handleButtonClick = () => {
        setCount(() => count + 1);
        console.log("Button Clicked", count);
    };

    return (
        <>
            <section className="main-div">
                <h1>Count == {count}</h1>
                <button onClick={handleButtonClick}>Click to Increment</button>
            </section>
            <ChildComponent count={count}/>
        </>
    );
};

function ChildComponent({count}) {
    console.log("Child Component Rendered");
    return (
        <div className="main-div">
            <h1>Child Component - {count}</h1>
        </div>
    );
}
