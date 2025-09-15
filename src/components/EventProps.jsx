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
            <button onClick={props.HandleWelcomeUser}>Click</button>
            <button onMouseEnter={props.handleHover}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}
