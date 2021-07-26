import React from "react"
import "./Card.css"
import blank from "./static/blank.png"

const Card = ({ image = blank, value, suit, code }) => {

    return (
        <div className="Card-divContainer" >
            {/* <div className="Card-divButton" >
                <button className="Card-btnDraw">Draw a Card</button>
            </div> */}
            <div className="Card-divCard" >
                <img className="Card-imgCard"
                    src={image}
                    alt={`Card ${value} ${suit}`}
                />
            </div>
        </div>
    )

    // return (
    //     <div className="Card-divContainer" >
    //         {/* <div className="Card-divButton" >
    //             <button className="Card-btnDraw">Draw a Card</button>
    //         </div> */}
    //         <div className="Card-divCard" >
    //             <img className="Card-imgCard"
    //                 src={`http://deckofcardsapi.com/static/img/${code}.png`}
    //                 alt={`${code}.png`}
    //             />
    //         </div>
    //     </div>
    // )

}

export default Card;