import React from "react";
import Players from "./Players";

export default function Scoreboard() {
  return (
    <div>
      <h4>Players</h4>
      <Players id={1} name="Vio" />
      <Players id={2} name="Leo" />
      <Players id={3} name="Mio" />
      <Players id={4} name="Kio" />
      <Players id={5} name="Rio" />
      <Players id={6} name="Tio" />
    </div>
  );
}
