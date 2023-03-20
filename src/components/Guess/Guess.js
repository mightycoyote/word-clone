import React from "react";
import { range } from "../../utils";

function Guess({guess}) {

return (
  <div className="guess">
    {range(5).map((num) => (
      <span key={num} className="cell">
        {guess ? guess[num] : undefined}
      </span>
      ))}
  </div>
)

}

export default Guess;
