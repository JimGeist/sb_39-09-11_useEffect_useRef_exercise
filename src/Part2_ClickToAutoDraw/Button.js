import React from "react";

import "./Button.css";

/**
 * Button Component to Start or Stop Drawing Cards.
 * @btnMode is either "Start" or "Stop". "Start" is the default.
 * @disableClass is appended to className. Class 'Button-btnDrawDisabled'
 *    disables the button and greys the text.
 * @buttonFx is the function for the onClick event. The function is the same,
 *    regardless of btnMode. The funciton determines the proper action for the 
 *    current btnMode
 * @returns a div with a button
 */
const Button = ({ btnMode = "Start", disableClass, buttonFx }) => {

    // btnMode is either 
    const btnText = `${btnMode} Drawing Cards`;

    return (
        <div className="Button-divButton" >
            <button className={`Button-btnDraw${disableClass}`} onClick={buttonFx} >{btnText}</button>
        </div >
    )

}

export default Button;