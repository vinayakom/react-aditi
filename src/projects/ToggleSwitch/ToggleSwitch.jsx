import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitch, PiUserSwitchFill } from "react-icons/pi";

export const ToggleSwitch = () => {
    
    const [isOn,setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
    
    const checkIsOn = isOn ? "on" : "off";

    const toggleBackgroundColor = {backgroundColor:isOn ? "#4caf50" : "#f44336"}

    return (
        <>
        <h1 style={{color: "#000", textAlign: "center"}}>Toggle Switch {" "}
            <IoIosSwitch style={{color: "#e86c6cff", textAlign: "center"}} />
            <PiUserSwitchFill style={{color: "#e86c6cff", textAlign: "center"}} />
        </h1>
        <div 
            className="toggle-switch" 
            style={toggleBackgroundColor} 
            onClick={handleToggleSwitch} 
        >
            <div className={`switch ${checkIsOn}`} >
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
</>
    );
};  
