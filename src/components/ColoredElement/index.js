import React from "react";

import styles from "./styles.scss";

const ColoredElement = ({ count, children }) => {
  let color = "inherit";
  if (count > 0) {
    color = "#43d123";
  } else if (count < 0) {
    color = "#dd2121";
  }
  return (
    <span className={styles.container} style={{ backgroundColor: color }}>
      {children}
    </span>
  );
};

export default ColoredElement;
