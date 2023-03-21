import React from "react";

function Letter({ letter, letterStatus }) {
  const [classes, setClasses] = React.useState('cell');

  return (
    <span className={classes}>{letter}</span>
  );
}

export default Letter;
