import Fade from "@mui/material/Fade";
import { TransitionGroup } from "react-transition-group";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import React from "react";
import "./RandomQuoteMachine.css";

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
    this.newQuote = this.newQuote.bind(this);
    this.composeTweet = this.composeTweet.bind(this);
  }

  componentWillMount() {
    this.newQuote();
  }

  newQuote() {
    fetch("https://api.quotable.io/random?maxLength=100")
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          quote: " " + jsonResponse.content + " ",
          author: jsonResponse.author,
        });
      });
  }

  composeTweet() {
    let formattedLink =
      "https://twitter.com/intent/tweet?text=" +
      this.state.quote.split(" ").join("%20") +
      "%20-%20" +
      this.state.author.split(" ").join("%20");

    return formattedLink;
  }

  render() {
    return (
      <TransitionGroup>
        <Fade timeout={1500}>
          <div id="quote-container">
            <p id="quote-text">
              <FaQuoteLeft />
              {this.state.quote}
              <FaQuoteRight />
            </p>
            <p id="quote-author">{this.state.author}</p>
            <a href={this.composeTweet()} id="tweet-quote">
              <FaTwitter />
            </a>
            <button onClick={this.newQuote} id="new-quote">
              New Quote
            </button>
          </div>
        </Fade>
      </TransitionGroup>
    );
  }
}

export default RandomQuoteMachine;
