import React from "react";
import { Link } from "react-router-dom";

const Index = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "28px"
    }}
  >
    <Link to={"/stats"}>Stats</Link>
  </div>
);

export default Index;
