import React from "react"
import "./CardP1.css"
import blank from "./static/blank.png"

const Card = ({ image = blank, value, suit, code }) => {

    return (
        <div className="CardP1-divContainer" >
            <div className="CardP1-divCard" >
                <img className="CardP1-imgCard"
                    src={image}
                    alt={`Card ${value} ${suit}`}
                />
            </div>
        </div>
    )

}

export default Card;