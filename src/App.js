import styled from "styled-components";
import { useState, useEffect } from "react";
import React from "react";

import Headline from "./components/Headline";
import Card from "./components/Card";

async function fetchItems() {
  return fetch("http://localhost:4000/liquors").then((result) => result.json());
}

function App() {
  const [liquors, setLiquors] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    fetchItems().then((items) => {
      const itemsFetchedFromApi = items.map((item) => ({
        name: item.name,
        price: item.price,
        alc: item.alc,
        color: item.color,
      }));
      setLiquors(itemsFetchedFromApi);
    });
  }

  return (
    <div className="App">
      <Headline text="welcome to the liquor-store" />
      {liquors.map(({ name, price }) => (
        <Card name={name} price={price} />
      ))}
    </div>
  );
}

export default App;
