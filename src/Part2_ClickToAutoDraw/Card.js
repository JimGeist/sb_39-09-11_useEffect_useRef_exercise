import React from "react"
import "./Card.css"
import blank from "./static/blank.png"

const Card = ({ image = blank, value, suit, code }) => {

    return (
        <div className="Card-divContainer" >
            <div className="Card-divCard" >
                <img className="Card-imgCard"
                    src={image}
                    alt={`Card ${value} ${suit}`}
                />
            </div>
        </div>
    )

}

export default Card;