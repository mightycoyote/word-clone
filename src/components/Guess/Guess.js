import React from "react";
import { range } from "../../utils";
import Letter from "../Letter";

function Guess({ guess, guessStatus }) {
  return (
    <div className="guess">
      {range(5).map((num) => (
        <Letter
          key={num}
          letter={guess ? guess[num] : undefined}
          letterStatus={guessStatus[num]}
        />
      ))}
    </div>
  );
}

export default Guess;
