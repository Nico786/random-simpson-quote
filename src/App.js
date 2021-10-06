import QuoteCard from "./components/QuoteCard";
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState([]);

  const getQuote = () => {
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => {
        /* console.log(response) */
        setQuote([response.data[0]])
      })
      .catch(error => {
        console.log(error)
      })
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <button type="button" onClick={getQuote}>Random Simpson Quote</button>

      {quote.map((randomQuote, index) => {
        return (
          <div key={index}>
            <QuoteCard
              quote={randomQuote.quote}
              character={randomQuote.character}
              image={randomQuote.image}
            />
          </div>
        )
      })}
    </div>
  );
}

export default App;
