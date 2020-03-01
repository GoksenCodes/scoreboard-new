import React, { useState } from "react";

export default function PlayerForm(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    props.addPlayer(name); // we call the addPlayer function of the parent here in the related function of the child(handlesumit)
    // name prensents the current state at the time of the click event (name--setName)
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input value={name} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}
