import "./EventHandling.css";

export const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("Button onClick!");
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.type);
        console.log(event.target);
        alert("Button onClick!");
    }

    const handleWelcomUser = () => {
        console.log("Welcome User!");
        alert("Welcome User!");
    };

    return (
        <>
            <button onClick={handleButtonClick}>Named Function Call</button>
            <br />
            <br />
            <button onClick={(event) => handleButtonClick(event)}>Function Call</button>
            <br />
            <br />
            <button onClick={(event) => console.log(event)}>Inline Function</button>
            <br />
            <br />
            <button onClick={() => alert("I am Inline arrow function call")}>Inline Arrow Function</button>
            <br />
            <br />
            <button onClick={handleWelcomUser}>Welcome User Call</button>
            <br />
            <br />
            <button onClick={() => handleWelcomUser("React")}>Welcome React</button>
        </>
    );
};