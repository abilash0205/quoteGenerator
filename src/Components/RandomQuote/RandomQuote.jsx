import React, { useState } from "react";
import "./RandomQuote.css";
import reloadIcon from '../Assets/iconmonstr-synchronization-18.svg'
import twitterIcon from '../Assets/iconmonstr-retweet-1.svg'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }

  const [quote, setQuote] = useState({
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  });

  const twitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
  }

  loadQuotes();

  return (
    <div className="wrapper">
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(',')[0]}</div>
          <div className="icons">
            <img 
                src={reloadIcon} 
                alt="reloadButton"
                onClick={() => {random()}} 
            />
            <img 
                src={twitterIcon} 
                alt="shareButton"
                onClick={() => {twitterShare()}}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RandomQuote;
