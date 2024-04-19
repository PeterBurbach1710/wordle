import { default as React, default as React } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import BannerLost from "../BannerLost";
import BannerWon from "../BannerWon";
import GuessResults from "../GuessResults/GuessResults";

function GameForm({ answer }) {
  const [guess, setGuess] = React.useState("");
  const [prevGuesses, setPrevGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);

  function verifyInput(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      alert("Guess must be 5 characters long 😎");
      return;
    }
    setPrevGuesses([...prevGuesses, guess]);
    setNumOfGuesses(numOfGuesses + 1);
    console.log(numOfGuesses, NUM_OF_GUESSES_ALLOWED);
    if (guess === answer) {
      setGameStatus("won");
    } else if (numOfGuesses >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }

    setGuess("");
  }

  return (
    <>
      <GuessResults prevGuesses={prevGuesses} answer={answer} />
      {gameStatus === "playing" && (
        <form
          className='guess-input-wrapper'
          onSubmit={(event) => verifyInput(event)}
        >
          <label htmlFor='guess-input'>Enter guess:</label>
          <input
            required
            minLength={5}
            maxLength={5}
            type='text'
            id='guess-input'
            value={guess}
            onChange={(e) => {
              const upperGuessValue = e.target.value.toUpperCase();
              setGuess(upperGuessValue);
            }}
          />
        </form>
      )}
      {gameStatus === "won" && <BannerWon numOfGuesses={numOfGuesses} />}
      {gameStatus === "lost" && <BannerLost answer={answer} />}
    </>
  );
}

export default GameForm;
