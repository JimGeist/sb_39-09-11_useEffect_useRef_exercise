# sb_39-09-11_useEffect_useRef_exercises
 
## Technology Stack
- **Front-end**: ReactJS
- **Back-end**: n/a

## Assignment Details

Build a ReactJS application that displays the cards one at a time from a deck of cards. Application gives practice with `useEffect` and `useRef` React methods as well as dealing with multiple state conditions. 

**Part 1** application would deal a card whenever the 'Deal a Card' button is pressed. A message appears when there are no more cards in the deck. 

Every component required smoke and snapshot tests and tests to verify business logic. Tests need to enter data on the form, submit the form and use the buttons on the form or newly created components.

The assignment consisted of two parts -- a Color Box Maker and a Todo application. Both applications had very similar components 
- `___List` component that renders the form as well as the box or todo component,
- `New___Form` component with the labels, inputs, and 'Add' button to add a new box or todo.
- `Box` or `Todo` component which renders the object -- either a color filled box or a todo item -- with the values entered on the form. An `X` button to delete the box or todo item must appear with object.


## Additional Details

**Enhancements**
- Button to deal cards is disabled when there are no cards remaining in the deck.

**Difficulties**
- Adjusting to a new kind of program flow and understanding how to link the functions in a very implicit manner -- changing the `draw` value causes the `DeckOfCards` compoent to render and when it renders the `useEffect` to get a new card runs because it depends on `draw`, which changed. AND getting a new card changes state and the `DeckOfCards` compoent will render yet again. 

