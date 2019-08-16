import React from "react";
import styled from "styled-components";

const Styleheader = styled.h1`
  color: Darkred;
  text-shadow: 2px 1px black;
  border-bottom: 5px dashed grey;
  box-sizing: border-box;
`;
const Header = () => {
  return (
    <div>
      <Styleheader className="otherHeader">Star Wars Characters</Styleheader>
    </div>
  );
};

export default Header;
