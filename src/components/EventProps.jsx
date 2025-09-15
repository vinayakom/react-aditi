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
                onClickOfButton={() => HandleWelcomeUser('User_1')}
                onMouseHoverHandle={handleHover}
            />
        </>
    );
};

const WelcomeUser = (props) => {
    
    const handleGreeting = () => {
        console.log("Greeting from Child Component");
        props.onClickOfButton();
    }
    
    return (
        <>
            <button onClick={props.onClickOfButton}>Click</button>
            <button onMouseEnter={props.onMouseHoverHandle}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    );
};
