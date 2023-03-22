import React from "react";

function Letter({ letter, letterStatus }) {
 const className = letterStatus ? `cell ${letterStatus}` : 'cell';
  
  return (
    <span className={className}>{letter}</span>
  );
}

export default Letter;
