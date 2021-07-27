import React from "react";

import "./Button.css";

const Button = ({ btnIsStart = true, disableClass, buttonFx }) => {

    let btnText = `Start Drawing Cards`;
    if (btnIsStart === false) {
        btnText = `Stop Drawing Cards`;
    }

    console.log(`rendering: button, text: '${btnText}'`)

    return (
        <div className="Button-divButton" >
            <button className={`Button-btnDraw${disableClass}`} onClick={buttonFx} >{btnText}</button>
        </div >
    )

}

export default Button;