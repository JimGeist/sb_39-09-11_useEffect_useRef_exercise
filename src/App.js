import DeckOfCardsP1 from './Part1_ClickToDraw/DeckOfCardsP1';
import DeckOfCardsP2 from './Part2_ClickToAutoDraw/DeckOfCardsP2';
import './App.css';

function App() {
  document.title = "Deck of Cards"
  return (
    <div className="App">
      <DeckOfCardsP1 />
      <DeckOfCardsP2 />
    </div>
  );
}

export default App;
