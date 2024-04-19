import React from "react";

function BannerWon({ numOfGuesses }) {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </div>
  );
}

export default BannerWon;
