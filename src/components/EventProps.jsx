import "./EventHandling.css";
export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Welcome ${user}`);
    }

    const handleHover = () => {
        alert(`Hovering!`);
    }

    return (
        <>
            <WelcomeUser
                onClick={() => HandleWelcomeUser('User_1')}
                onMouseEnter={handleHover}
            />
        </>
    );
};

const WelcomeUser = (props) => {
    
    const handleGreeting = () => {
        console.log("Greeting from Child Component");
        props.onClick();
    }
    
    return (
        <>
            <button onClick={props.onClick}>Click</button>
            <button onMouseEnter={props.onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    );
};
