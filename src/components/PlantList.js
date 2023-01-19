import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(plants => setPlants(plants))
  }, [plants])

  const plantsDisplayed = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  fetch("http://localhost:6001/plants")

  return (
    <ul className="cards">{plantsDisplayed}</ul>
  );
}

export default PlantList;
