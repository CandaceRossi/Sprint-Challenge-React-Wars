import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charAttrib, setCharAttrib] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(res => {
      console.log("characters", res);
      setCharAttrib(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Header />
      {charAttrib.map(char => {
        return (
          <Cards
            key={char.id}
            name={char.name}
            gender={char.gender}
            height={char.height}
            haircolor={char.hair_color}
            birthyear={char.birth_year}
            created={char.created}
            edited={char.edited}
            eyecolor={char.eye_color}
            homeworld={char.homeworld}
            mass={char.mass}
            skincolor={char.skin_color}
          />
        );
      })}
    </div>
  );
};

export default App;
