import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";

const App = () => {
  const [charData, setCharData] = useState(" ");
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/1/")

      .then(response => {
        console.log("starwars", response);
        const SWdata = response.data.data;
        // .catch(err => setError(err.response.message));
        console.log("character data", SWdata);
        setCharData(SWdata);
      });
  }, []);
  // .catch(console.log("error", error))
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Header />
      <Cards People={charData} />
    </div>
  );
};

export default App;
