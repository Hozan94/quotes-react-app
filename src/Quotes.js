import React from "react";

function Quotes(props) {

    function clickHandler() {
        props.getQuote()
    }

    return (
        <section className="quotes-section">
            {props.error ? <h2>{props.error}</h2> : ""}
            <h1>Get Random Quotes</h1>
            <figure className="quote">
                <blockquote>
                    {props.quote.quote}
                </blockquote>
                <figcaption>
                    &mdash; <em>{props.quote.author}</em>
                </figcaption>
            </figure>
            <button onClick={clickHandler}>Get New Quote</button>
        </section>
    )
}

export default Quotes;