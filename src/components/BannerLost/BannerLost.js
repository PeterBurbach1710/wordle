import React from "react";

function BannerLost({ answer }) {
  return (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer was <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default BannerLost;
