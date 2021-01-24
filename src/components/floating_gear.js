import React from "react";
import "./gear.css";

export const Gear = ({ alt, src, }) => {
    return (
        <div className="fast">
        <div className="gear-container">
            <img className="gear" alt={alt} src={src}/>
        </div>
        </div>
    )
}

