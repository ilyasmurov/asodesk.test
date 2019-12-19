import React from "react";
import { Route } from "react-router";

import Index from "./pages/Index";
import Stats from "./pages/Stats";

const Routes = () => (
  <>
    <Route exact path="/" component={Index} />
    <Route path="/stats" component={Stats} />
  </>
);

export default Routes;
