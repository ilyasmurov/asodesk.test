import React from "react";
import { Button } from "../../components/_UI";

import styles from "./styles.scss";

const Index = () => (
  <div className={styles.container}>
    <span className={styles.text}>Welcome to</span>
    <Button size="large" primary="true" to={"/stats"} title="Stats" />
  </div>
);

export default Index;
