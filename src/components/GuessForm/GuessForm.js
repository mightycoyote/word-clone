import React from "react";

function GuessForm() {
  const [guess, setGuess] = React.useState('');

  return (
    <form class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
        setGuess('');
      }}
    >
  
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        pattern="\w{5}"
        required
        value={guess} 
        onChange={(event)=> {setGuess((event.target.value).toUpperCase())}} />
    </form>
  );
}

export default GuessForm;
