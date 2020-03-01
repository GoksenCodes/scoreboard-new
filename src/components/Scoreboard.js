import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import PlayerForm from "./PlayerForm";

const initialState = [
  { id: 1, name: "Vio" },
  { id: 2, name: "Leo" },
  { id: 3, name: "Mio" },
  { id: 4, name: "Zio" }
];

function sortByHighscore(playerA, playerB) {
  //currently this doesn't work because we only add a function that increments and/or decrements the value of score but this happens only in playercard not in the parent (scoreboard) component. In order to keep the updated score in parent component we need to add functions here
  console.log(playerA.score, playerB.score);
  return playerB.score - playerA.score;
}

function sortByName(playerA, playerB) {
  return playerA.name.localeCompare(playerB.name);
}
export default function Scoreboard() {
  const [players, setPlayers] = useState(initialState);
  const [sortBy, setSortBy] = useState("highscore");

  function addPlayer(name) {
    // we define the function here(callbackprop)
    const newPlayer = { name: name, id: players.length + 1 };
    console.log(newPlayer);
    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
  }

  function incrementScore(id) {
    //we need a unique key so app can understands which players' score needs to be incremented.
    const updatedPlayers = players.map(player => {
      // if (id === player.id) {
      //   return { ...player, score: player.score + 1 };
      return player.id === id ? { ...player, score: player.score + 1 } : player;
    });

    setPlayers(updatedPlayers);
  }

  function decrementScore(id) {
    const updatedPlayers = players.map(player => {
      return player.id === id ? { ...player, score: player.score - 1 } : player;
    });
    setPlayers(updatedPlayers);
  }
  function changeSorting(event) {
    setSortBy(event.target.value);
    console.log(event.target.value);
  }

  let sortedPlayers;

  if (sortBy === "highscore") {
    console.log("I'm score");
    sortedPlayers = [...players].sort(sortByHighscore);
  } else if (sortBy === "name") {
    console.log("I'm in name");
    sortedPlayers = [...players].sort(sortByName);
  }
  // setPlayers(sortedPlayers); //since I call the setPlayers as part of the main function (outside of inner function) it kept calling itself, goes to infinite loop

  // we pass addPlayer function to the child so that it can call it, we also need to give props argument to the child component.
  return (
    <div>
      <h4>Players</h4>
      <PlayerForm addPlayer={addPlayer} />
      <select onChange={changeSorting}>
        <option value="highscore">Sort by highest score</option>
        <option value="name">Sort by name</option>
      </select>
      {sortedPlayers.map(player => {
        //players is the updated state, we render players component for eaech player
        return (
          <PlayerCard
            key={player.id}
            // id={player.id}
            // name={player.name}
            // score={player.score}
            {...player}
            incrementScore={incrementScore}
            decrementScore={decrementScore}
          />
        );
      })}
    </div>
  );
}
