# sb_39-09-11_useEffect_useRef_exercises
 
## Technology Stack
- **Front-end**: ReactJS
- **Back-end**: n/a

## Assignment Details

Build a ReactJS application that displays the cards one at a time from a deck of cards. Application gives practice with `useEffect` and `useRef` React methods as well as dealing with multiple state conditions. 

**Part 1** application would deal a card whenever the 'Deal a Card' button is clicked. A message appears when there are no more cards in the deck. 

**Part 2** application deals a card every second automatically when the 'Start Dealing Cards' button is clicked. Clicking 'Stop Dealing Cards' ends the automatic card deal. 

`App.js` in `src` renders both **Part 1** and **Part 2**.

There were no component tests created for either Part 1 or Part 2.

## Additional Details

**Enhancements**
- Button to deal cards is disabled when there are no cards remaining in the deck.

**Difficulties**
- Adjusting to a different program flow and understanding how to link the functions in an implicit manner -- changing the `draw` value causes the `DeckOfCards` compoent to render and when it renders the `useEffect` to get a new card runs because it depends on `draw`, which changed. AND getting a new card changes state and the `DeckOfCards` compoent will render yet again. 

