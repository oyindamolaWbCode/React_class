import React from "react";

function Fruit({ emoji, name, price }) {
  return (
    <div>
      <li style={{ listStyle: "none", padding: "10px" }}>
        {emoji} {name} {price}
      </li>
    </div>
  );
}

export default Fruit;
