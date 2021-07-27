import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Card from "./Card";
import Button from "./Button";

import "./DeckOfCards.css";
import blank from "./static/blank.png"


const DeckOfCardsP2 = () => {

    const DELAY = 500;

    const NO_CARD = {
        image: blank,
        value: "no card",
        suit: "",
        code: "",
        deckDisableCls: ""
    };

    const [deckId, setDeckId] = useState(null);
    const [draw, setDraw] = useState();
    const [card, setCard] = useState(NO_CARD);

    const [btnMode, setBtnMode] = useState("Start");

    const timerId = useRef();

    const deckAPI = "http://deckofcardsapi.com/api/deck/";

    const stopDraw = () => {
        clearInterval(timerId.current);
    }


    const handleDraw = () => {
        // when btnMode is 'Start', interval code will deal a card
        //   every DELAY milliseconds.
        // when btnMode is 'Stop', the deal interval is canceled.

        const flipMode = {
            Start: "Stop",
            Stop: "Start"
        }

        // if (btnIsStart.current) {
        if (btnMode === "Start") {
            // start dealing immediately
            // draw controls flow instead of card. Changing card via
            //  setCard resulted in a runaway condition.
            // When draw changes, the DeckOfCards component will render
            //  and run the useEffect to get a new card.
            setDraw(Date.now());
            timerId.current = setInterval(() => {
                setDraw(Date.now());
            }, DELAY);

        } else {
            stopDraw();
        }

        // Change the button mode -- Start becomes Stop; Stop becomes Start
        setBtnMode(flipMode[btnMode]);

    }


    useEffect(() => {
        // Draw a card from the deck. The class to disable the start/stop 
        //  draw button is set when there are 0 remaining cards in the current 
        //  deck.
        // card state is updated by calling setCard with the card data from the API
        // Change of card state causes DeckOfCards to render.

        async function getCard() {

            try {
                const res = await axios.get(`${deckAPI}${deckId}/draw/?count=1`);

                let disableClass = "";
                if (res.data.remaining === 0) {
                    // handle last card / disabling the deck
                    disableClass = " Button-btnDrawDisabled"
                    // end the timer
                    stopDraw();
                }

                // calling setCard outside of this function set it to the
                //  promise object. Calling setCard within the function 
                //  works since the promise is resolved.
                // The class to disable the button when there are no more 
                //  cards is added to card values.
                // Calling setCard will cause the component to render with the 
                //  new card value.
                setCard({ ...res.data.cards[0], deckDisableCls: disableClass });

            } catch (error) {
                console.error(error)
            }

        };
        if (deckId) {
            // Only call getCard when we have a deckId!
            getCard();
        }

    }, [draw]);

    useEffect(() => {
        // Get initial deck of cards. Card deck is retained in deckId
        // This function / useEffect only runs once at start.
        async function getDeckId() {

            try {
                //http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
                const res = await axios.get(`${deckAPI}new/shuffle/?deck_count=1`);

                setDeckId(res.data.deck_id);

            } catch (error) {
                console.error(error)
            }

        };
        getDeckId();

    }, []);

    return (
        <div className="Card-divContainer" >
            {deckId ?
                <Button
                    btnMode={btnMode}
                    disableClass={card.deckDisableCls}
                    buttonFx={handleDraw} />
                : <h1>Loading . . .</h1>
            }
            <Card image={card.image} value={card.value} suit={card.suit} code={card.code} />
            {((card.deckDisableCls).length > 0) ?
                <h1>There are no more cards in deck '{deckId}'.</h1>
                : <h1>&nbsp;</h1>
            }
        </div>
    )

}

export default DeckOfCardsP2;