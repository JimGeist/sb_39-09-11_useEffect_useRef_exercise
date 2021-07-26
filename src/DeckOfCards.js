import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

import "./DeckOfCards.css";
import blank from "./static/blank.png"


const DeckOfCards = () => {

    const NO_CARD = {
        image: blank,
        value: "no card",
        suit: "",
        code: "",
        deckDisableCls: ""
    };

    const [draw, setDraw] = useState();
    const [card, setCard] = useState(NO_CARD);
    const [deckId, setDeckId] = useState(null);

    const deckAPI = "http://deckofcardsapi.com/api/deck/";

    const handleDraw = () => {
        // clicked the button
        // Change the value for draw. Changing the state value causes a 
        //  render and getCard in useEffect will run on the render.
        setDraw(Date.now());
    }

    useEffect(() => {
        // Draw a card from the deck
        async function getCard() {

            try {
                //http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
                const res = await axios.get(`${deckAPI}${deckId}/draw/?count=1`);

                let disableClass = "";
                if (res.data.remaining === 0) {
                    // handle last card / disabling the deck
                    disableClass = " DeckOfCards-btnDrawDisabled"
                }
                setCard({ ...res.data.cards[0], deckDisableCls: disableClass });

            } catch (error) {

            }

        };
        if (deckId) {
            setCard(getCard());
        }

    }, [draw]);

    useEffect(() => {
        // Get initial deck of cards. Card deck is retained in deckId
        // async function getDeckId() {

        //     try {
        //         //http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
        //         const res = await axios.get(`${deckAPI}new/shuffle/?deck_count=1`);

        //         console.log("res:", res)
        //         return res.data.deckId;

        //     } catch (error) {

        //     }

        // };
        // setDeckId(getDeckId());
        console.log("Setting deck id");
        setDeckId("gm7u1496wcol");

    }, []);

    return (
        <div className="Card-divContainer" >
            <div className="DeckOfCards-divButton" >
                {deckId ? <button className={`DeckOfCards-btnDraw${card.deckDisableCls}`} onClick={handleDraw} >Draw a Card</button> : <h1>Loading</h1>}
            </div>

            <Card image={card.image} value={card.value} suit={card.suit} code={card.code} />
        </div>
    )

}

export default DeckOfCards;