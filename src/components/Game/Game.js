import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";
import GuessForm from "../GuessForm/GuessForm";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });
  console.info({ answer });
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

  function reset() {
    setGuessLog("");
    setWin(undefined);
    setNumberOfGuesses(0);
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResults guessLog={guessLog} answer={answer} />
      <GuessForm addGuess={addGuess} win={win} />
      {/* Josh creates a basic banner component, then a win banner and a lose banner */}
      {win === true && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {numberOfGuesses === 1 ? "1 guess" : `${numberOfGuesses} guesses`}
            </strong>
            .<button onClick={() => reset()}>Reset</button>
          </p>
        </div>
      )}
      {win === false && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
            <button onClick={() => reset()}>Reset</button>
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
