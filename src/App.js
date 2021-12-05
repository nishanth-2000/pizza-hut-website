import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Catagory from "./components/Catagory";
import HomePage from "./Screens/HomePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catagory" component={Catagory} />
      </Switch>
    </Router>
  );
}

export default App;
