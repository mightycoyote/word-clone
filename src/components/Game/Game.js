import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";
import GuessForm from "../GuessForm/GuessForm";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // displayed list of submitted guesses
  const [guessLog, setGuessLog] = React.useState([]);
  const [win, setWin] = React.useState(undefined);
  const [numberOfGuesses, setNumberOfGuesses] = React.useState(0);

  function addGuess(guess) {
    const newGuessList = [...guessLog, guess];
    const newCount = numberOfGuesses + 1;
    setGuessLog(newGuessList);
    setNumberOfGuesses(newCount);
    checkWin(guess);
    checkLose(newCount);
  }

  function checkWin(guess) {
    if (guess === answer) {
      setWin(true);
    }
  }

  function checkLose(newCount) {
    if (newCount >= NUM_OF_GUESSES_ALLOWED) {
      setWin(false);
    }
  }

  return (
    <>
      <GuessResults guessLog={guessLog} answer={answer} />
      <GuessForm addGuess={addGuess} win={win} />
      {win === true && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numberOfGuesses} guesses</strong>.
          </p>
        </div>
      )}
      {win === false && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
