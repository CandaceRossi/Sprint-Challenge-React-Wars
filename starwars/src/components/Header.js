import React from "react";
import styled from "styled-components";

const HeaderBG = styled.div`
  width: 450px;
  margin: 0 auto;
  background-image: linear-gradient(to bottom, black, gray);
  border-radius: 7px;
  text-align: center;
  padding: 10px 10px;
`;
const ColorH2 = styled.h2`
  color: white;
  font-size: 1.5rem;
`;
const Header = () => {
  return <HeaderBG>{<ColorH2>Star Wars Character Cards</ColorH2>}</HeaderBG>;
};
export default Header;
