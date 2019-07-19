import React from "react";

const Cards = props => {
  console.log("CardProps", props);
  return (
    <div>
      {/* <img src="this is not a url" /> */}
      <h3>{props.name}</h3>;<p> {props.birth_year}</p>;
    </div>
  );
};

export default Cards;
