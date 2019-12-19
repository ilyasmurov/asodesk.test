import React from "react";

const ColoredElement = ({ count, children }) => {
  let color = "inherit";
  if (count > 0) {
    color = "#43d123";
  } else if (count < 0) {
    color = "#dd2121";
  }
  return <span style={{ color: color }}>{children}</span>;
};

export default ColoredElement;
