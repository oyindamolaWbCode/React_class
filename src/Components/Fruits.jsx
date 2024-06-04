import React from "react";

function Fruits(props) {
  const fruitList = [
    "Apple",
    "Mango",
    "Kiwi",
    "Tangerine",
    "Watermelon",
    "Pineapple",
    "Grape",
  ];
  return (
    <div>
      <ul>
        {fruitList.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
