import React from "react";

function Hello(props) {
  const { message, name, emoji, seatNumber } = props;
  return (
    <div>
      <h1>
        {message} {name} {emoji}, {seatNumber}.
      </h1>
    </div>
  );
}

export default Hello;
