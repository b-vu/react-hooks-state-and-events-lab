import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [cartStatus, setCartStatus] = useState(false);

  const handleClick = event => {
    if(cartStatus){
      event.target.textContent = "Add to cart";
      event.target.parentElement.className = "";
      setCartStatus(false);
    }
    else{
      event.target.parentElement.className = "in-cart";
      event.target.textContent = "Remove from cart";
      setCartStatus(true);
    }
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
