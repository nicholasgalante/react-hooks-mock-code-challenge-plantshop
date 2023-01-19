import React, {useState} from "react";

function PlantCard({ plant }) {
  const {name, image, price} = plant
  const [inStock, setInStock] = useState(true)

  function changeStockAvailability(){
    setInStock(!inStock)
  }
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={changeStockAvailability}>In Stock</button>
      ) : (
        <button onClick={changeStockAvailability}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
