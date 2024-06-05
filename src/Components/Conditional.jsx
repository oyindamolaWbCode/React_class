import React from "react";
import SubComponentI from "./SubComponentI";
import SubComponentII from "./SubComponentII";

function Conditional(props) {
  const display = false;

  return display
    ? <h2>You are welcome</h2> && <SubComponentI />
    : <h2>You are here again 😊</h2> && <SubComponentII />;
}

export default Conditional;
