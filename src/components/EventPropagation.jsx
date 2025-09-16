import "./EventHandling.css";

export const EventPropagation = () => {

    const handleGrandParentClick = () => {
        console.log("Grand Parent Div Clicked");
    }

    const handleParentClick = () => {
        console.log("Parent Div Clicked");
    }

    const handleChildClick = (event) => {
        console.log(event);
        console.log("Child Div Clicked");
    }

    return (
        <section className="main-div">
            <div className="g-div" onClick={handleGrandParentClick}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Child Dev
                    </button>
                </div>
            </div>
        </section>
    );
};
