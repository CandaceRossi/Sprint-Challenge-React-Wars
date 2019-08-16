import React from "react";
import styled from "styled-components";

const CLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  align-items: row;
`;

const Layout = styled.div`
  width: 375px;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  background: Linear-gradient(to top, Darkred, Grey);
  color: white;
  font-family: "fantasy";
  box-sizing: border-box;
`;
const Playout = styled.p`
  width: 365px;
  display: flex;
  flex-direction: column;
`;
const Cards = props => {
  return (
    <CLayout>
      <Layout>
        <h2>Name: {props.name}</h2>
        <Playout>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}</p>
          <p>Hair-Color: {props.haircolor}</p>
          <p>Birth-Year: {props.birthyear}</p>
          <p>Created: {props.created}</p>
          <p>Edited: {props.edited}</p>
          <p>Eye-Color: {props.eyecolor}</p>
          <p>Homeworld: {props.homeworld}</p>
          <p>Mass: {props.mass}</p>
          <p>Skin-Color: {props.skincolor}</p>
        </Playout>
      </Layout>
    </CLayout>
  );
};

export default Cards;
