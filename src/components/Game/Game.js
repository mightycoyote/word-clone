import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';
import GuessForm from '../GuessForm/GuessForm';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  // displayed list of submitted guesses
  const [guessLog, setGuessLog] = React.useState([]);

  function addGuess(guess) {
    const newGuessList = [...guessLog, guess];
    setGuessLog(newGuessList);
  }
  
  return (
    <>
      <GuessResults guessLog={guessLog} answer={answer} />
      <GuessForm addGuess={addGuess} />
    </>
  );
  
}

export default Game;
