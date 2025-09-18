// import { MovieCards } from "./components/MovieCards";
// import "./components/MovieCards.css";
// import "./components/MovieCards.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { DerivedState } from "./components/DerivedState";
// import { LiftStateUp } from "./components/LiftStateUp";
//import { State } from "./components/hooks/State";
import "./components/EventHandling.css";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";

export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">Best Movies List</h1> */}
      {/* <MovieCards /> */}
      {/* <EventHandling /> */}
      {/* {<EventProps />} */}
      {/* {<EventPropagation />} */}
      {/* <State /> */}
      {/* <DerivedState /> */}
      {/* <LiftStateUp/> */}
      <ToggleSwitch />
    </section>
  );
};
