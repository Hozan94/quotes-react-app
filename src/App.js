import './App.css';
import React, { useEffect, useState } from "react";
import Quotes from "./Quotes";

function App() {

    const [quote, setQuote] = useState("");
    const [newQuote, setNewQuote] = useState(0);
    const [error, setError] = useState(null);

    function getQuote() {
        setNewQuote(newQuote + 1)
    }

    useEffect(() => {
        fetch(`https://hozan-quote-server.glitch.me/quotes/random`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(
                    `Encountered something unexpected: ${response.status}`
                );
            })
            .then(
                data => {
                    setQuote(data);
                },
                error => {
                    setError(error);
                }
            );
    }, [newQuote])

    return (
        <Quotes quote={quote} getQuote={getQuote} error={error} />
    );
}

export default App;
