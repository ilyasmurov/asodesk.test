import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.scss";

const App = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>{children}</div>
    </div>
  );
};

export default App;
