import React from "react";

function Hello(props) {
  const { message, name, emoji } = props;
  return (
    <div>
      <h1>
        {message} {emoji}, {name}.
      </h1>
    </div>
  );
}

export default Hello;
