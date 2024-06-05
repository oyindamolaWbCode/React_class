import React from "react";
import Fruit from "./Fruit";

function Fruits(props) {
  // const fruitList = [
  //   "Apple",
  //   "Mango",
  //   "Kiwi",
  //   "Tangerine",
  //   "Watermelon",
  //   "Pineapple",
  //   "Grape",
  // ];
  const fruitList = [
    {
      name: "Apple",
      price: "300",
      emoji: "🍎",
    },
    {
      name: "Mango",
      price: "100",
      emoji: "🥭",
    },
    {
      name: "Kiwi",
      price: "500",
      emoji: "🥝",
    },
    {
      name: "Tangerine",
      price: "80",
      emoji: "🍊",
    },
    {
      name: "Watermelon",
      price: "250",
      emoji: "🍉",
    },
    {
      name: "Pineapple",
      price: "250",
      emoji: "🍍",
    },
    {
      name: "Grape",
      price: "310",
      emoji: "🍇",
    },
  ];
  return (
    <div>
      <ul>
        {fruitList.map((fruit) => (
          // <li style={{ listStyle: "none", padding: "10px" }} key={fruit.name}>
          //   {fruit.emoji} {fruit.name} {fruit.price}
          // </li>
          <Fruit
            key={fruit.name}
            emoji={fruit.emoji}
            name={fruit.name}
            price={fruit.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
