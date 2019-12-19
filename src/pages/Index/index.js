import React from "react";
import { Button } from "../../components/_UI";

import styles from "./styles.scss";
import animate from "../../styles/animate.scss";

const Index = () => (
  <div className={styles.container}>
    <span className={[styles.text, animate.fromTop].join(" ")}>Welcome to</span>
    <Button
      className={animate.fromTop}
      style={{ animationDelay: ".1s" }}
      size="large"
      primary="true"
      to={"/stats"}
      title="Stats"
    />
  </div>
);

export default Index;
