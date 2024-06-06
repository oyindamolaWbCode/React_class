import React from "react";

function Fruit({ emoji, name, price }) {
  return (
    <>
      {/* {emoji} {name} ${price} */}

      {price > 50 ? (
        <li style={{ listStyle: "none", padding: "10px" }}>
          {emoji} {name} ${price}{" "}
        </li>
      ) : null}
    </>
  );
}

export default Fruit;
