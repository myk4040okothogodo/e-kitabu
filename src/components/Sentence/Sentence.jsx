import React, {useState } from 'react';
import Word from '../Word/Word';
import './Sentence.css';


const Sentence = ({ content, tokens ,clicked}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [clickedToken, setClickedToken] = useState(null);


    const handleClick = (word) => {
        console.log(word, " clicked");
        tokens.map((token) => {
            if (token.value === word){
                setIsClicked(true);
                setClickedToken(token);
            }
          return null;
        });
      return null;
    };

    const renderParagraph = () => content.split(" ").map((word) => <span className="book__word "  onClick={() => handleClick(word) }>{" "}{word}{" "}</span> );

    return (
        <div>
      {!isClicked ? (
        <div className= "p__opensans "  style={{whiteSpace:"wrap"}}>
        {renderParagraph()}
        </div>
      ) : (
        <div><Word {...clickedToken} setIsClicked={setIsClicked}/></div>
    
      )}
    </div>
    )  
};


export default Sentence;
