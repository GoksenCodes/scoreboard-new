import React from "react";

export default function PlayerCard(props) {
  // const [score, setScore] = useState(0); from now on we do the increment & decrement from parent component

  function increment() {
    // console.log("initial score was:", score); //this shows the score before set score
    // setScore(score + 1); // we set a new score here -

    props.incrementScore(props.id);
  }

  function decrement() {
    // if (score > 0) {
    //   setScore(score - 1);
    props.decrementScore(props.id);
  }

  return (
    <div>
      {props.name} score: {props.score}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
