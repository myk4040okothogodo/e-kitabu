import React, {useState } from 'react';
import Word from '../Word/Word';
import './Sentence.css';

/* In this component i set two state variables, isClicked and Clicked token, isClicked will be used to implemnent conditional rendering below*/
const Sentence = ({ content, tokens ,clicked}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [clickedToken, setClickedToken] = useState(null);


    const handleClick = (word) => {       /* this handler takes the clicked word and matches it to a token, using this token to set the cllickedToken state*/
        console.log(word, " clicked");    /* and also setting the isClicked to true */
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
    /* the function simply goes throught the content word by word re-labelling each word in a span tag and assingine an onClick listener to each word*/
    /* balow we implement the codnitional rendering of either the normal page view, or a word-token card if  a word has been clicked.*/
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
