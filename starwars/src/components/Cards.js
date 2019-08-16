import React from "react";

const Cards = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      <p>{props.haircolor}</p>
      <p>{props.birthyear}</p>
      <p>{props.created}</p>
      <p>{props.edited}</p>
      <p>{props.eyecolor}</p>
      <p>{props.homeworld}</p>
      <p>{props.mass}</p>
      <p>{props.skincolor}</p>
    </div>
  );
};

export default Cards;
