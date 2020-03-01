import React, { useState } from "react";

export default function Players(props) {
  const [score, setScore] = useState(0);

  function handleClick() {
    console.log("initial score was:", score); //this shows the score before set score
    setScore(score + 1); // we set a new score here
  }

  function decrease() {
    if (score > 0) {
      setScore(score - 1);
    }
  }
  return (
    <div>
      <button onClick={decrease}>-</button>
      {props.name} score: {score} id: {props.id}
      <button onClick={handleClick}>+</button>
    </div>
  );
}
