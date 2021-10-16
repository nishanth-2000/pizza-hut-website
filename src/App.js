import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Body from "./components/Body";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Body />
    </Router>
  );
}

export default App;
