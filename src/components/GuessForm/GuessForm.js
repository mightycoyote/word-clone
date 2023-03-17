import React from "react";

function GuessForm() {
  const [guess, setGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        // Josh likes to make these console logs into objects; nicer to read in console
        console.log({guess});
        setGuess('');
      }}
    >
  
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        pattern="[a-zA-Z]{5}"
        required
        value={guess} 
        onChange={(event)=> {setGuess((event.target.value).toUpperCase())}} 
      />
    </form>
  );
}

export default GuessForm;
