import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
    
    const [isOn,setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
    
    const checkIsOn = isOn ? "on" : "off";

    const toggleBackgroundColor = {backgroundColor:isOn ? "#4caf50" : "#f44336"}

    return (
        <div 
            className="toggle-switch" 
            style={toggleBackgroundColor} 
            onClick={handleToggleSwitch} 
        >
            <div className={`switch ${checkIsOn}`} >
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>

    );
};  
