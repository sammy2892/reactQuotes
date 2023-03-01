import { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import quotes from "./assets/quotes.json";
import color from "./utils/color";
import "./App.css";

function App() {
  const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);

  const firstQuote = quotes[getIndexRandom(quotes)];
  const firstColor = color[getIndexRandom(color)];

  const [randomQuote, setRandomQuote] = useState(firstQuote);
  const [randomColor, setRandomColor] = useState(firstColor);

  const backgroundObject = {
    backgroundColor: randomColor,
  };

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)]);
    setRandomColor(color[getIndexRandom(color)]);
  };

  return (
    <div style={backgroundObject} className="App">
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </div>
  );
}

export default App;
