import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [filterBy, setFilterBy] = useState("All");

  const display = items.filter((item) => {
    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }
  });


  function filterChange(event){
    setFilterBy(event.target.value)

  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterChange}  name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {display.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

