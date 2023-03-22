import React from "react";
import { range } from "../../utils";
// Josh combines the Letter component function on this page in his version
// (small and not needed for reuse). Makes some linters mad
import Letter from "../Letter";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const guessStatus = checkGuess(guess, answer);

  return (
    <div className="guess">
      {range(5).map((num) => (
        <Letter
          key={num}
          letter={guessStatus ? guessStatus[num].letter : undefined}
          letterStatus={guessStatus ? guessStatus[num].status : undefined}
        />
      ))}
    </div>
  );
}

export default Guess;
