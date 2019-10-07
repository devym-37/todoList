import React from "react";

const PastViewEntry = ({ todoText, complete }) => (
  <div>
    <span className="lilist">{todoText}</span>
  </div>
);

export default PastViewEntry;
