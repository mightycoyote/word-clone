import React from "react";

function GuessForm( {addGuess} ) {
  // this state is just to watch this form. addGuess adds it to Game state when submitted
  const [guess, setGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(guess);
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
