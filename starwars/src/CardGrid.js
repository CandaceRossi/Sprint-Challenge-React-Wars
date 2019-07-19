import React from "react";

const CardGrid = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.height}</p>
      <p>{props.hair_color}</p>
      <p>{props.skin_color}</p>
      <p>{props.eye_color}</p>
      <p>{props.birth_year}</p>
    </div>
  );
};
export default CardGrid;
