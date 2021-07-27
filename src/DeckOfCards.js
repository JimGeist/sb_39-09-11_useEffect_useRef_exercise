import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Card from "./Card";
import Button from "./Button";

import "./DeckOfCards.css";
import blank from "./static/blank.png"


const DeckOfCards = () => {

    console.log("\n\nNewRun");
    const NO_CARD = {
        image: blank,
        value: "no card",
        suit: "",
        code: "",
        deckDisableCls: ""
    };

    console.log("setting draw");

    const [draw, setDraw] = useState();

    console.log("setting card");
    const [card, setCard] = useState(NO_CARD);

    console.log(`${card.code}: setting deckId`);
    const [deckId, setDeckId] = useState(null);
    const timerId = useRef();

    console.log(`${card.code}: setting btnIsStart`);
    const [btnIsStart, setBtnIsStart] = useState(true);

    // const btnIsStart = useRef(true);
    // console.log("btnIsStart: ", btnIsStart.current);
    console.log(`${card.code}: btnIsStart: ${btnIsStart}`);

    const deckAPI = "http://deckofcardsapi.com/api/deck/";

    const stopDraw = () => {
        clearInterval(timerId.current);
    }

    const handleDraw = () => {

        // if (btnIsStart.current) {
        if (btnIsStart) {

            timerId.current = setInterval(() => {
                setDraw(Date.now());
            }, 5000);

        } else {
            stopDraw();
        }

        // btnIsStart.current = !btnIsStart.current;
        setBtnIsStart(!btnIsStart);

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
                    disableClass = " Button-btnDrawDisabled"
                    // end the timer
                    stopDraw();

                }

                console.log(`${card.code} (old): new card from deck is ${res.data.cards[0].code};`)
                setCard({ ...res.data.cards[0], deckDisableCls: disableClass });

            } catch (error) {

            }

        };
        if (deckId) {
            console.log(`${card.code}: draw a card from the deck;`)
            getCard();
            // const newCard = getCard()
            // setCard(newCard);
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
            <Button
                btnIsStart={btnIsStart}
                disableClass={card.deckDisableCls}
                buttonFx={handleDraw} />

            <Card image={card.image} value={card.value} suit={card.suit} code={card.code} />
        </div>
    )

    //         < div className = "DeckOfCards-divButton" >
    //         {deckId ?
    //         <button
    //             btnMode="Draw a Card"
    //             disableClass={card.deckDisableCls}
    //             buttonFx={handleDraw} />
    //         : <h1>Loading</h1>}
    // </div>

    // {deckId ? <button className={`DeckOfCards-btnDraw${card.deckDisableCls}`} onClick={handleDraw} >Draw a Card</button> : <h1>Loading</h1>}
}

export default DeckOfCards;