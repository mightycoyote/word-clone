import React from "react";

function GuessResults({guessLog}) {
  return (
    <div className="guess-results">
      {guessLog.map((guess, index) => (
        <p className="guess" key={index}>{guess}</p>
      ))}
      
    </div>
  );
}

export default GuessResults;
