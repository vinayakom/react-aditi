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
        event.stopPropagation();
        console.log("Child Div Clicked");
    }

    return (
        /* Commented part is for bubbling propagation */
        // <section className="main-div">
        //     <div className="g-div" onClick={handleGrandParentClick}>
        //         <div className="p-div" onClick={handleParentClick}>
        //             <button className="c-div" onClick={handleChildClick}>
        //                 Child Dev
        //             </button>
        //         </div>
        //     </div>
        // </section>
        
        /* Below part is for capturing propagation */
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParentClick}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Dev
                    </button>
                </div>
            </div>
        </section>
    );
};
