export const State = () => {
    
    let value = 0;

    const handleButtonClick = () => {
        value = value + 1;
        console.log("Button Clicked", value);
    };

    return (
        <>
            <h1>Count == {value}</h1>
            <button onClick={handleButtonClick}>Click to Increment</button>
        </>
    );
};
