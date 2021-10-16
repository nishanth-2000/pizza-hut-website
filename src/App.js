import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { footerData } from "./components/Footer/data";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Body />
      <Footer heading="Choose your favorite" footerData={footerData} />
    </Router>
  );
}

export default App;
