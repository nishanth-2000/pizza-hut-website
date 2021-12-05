import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { BodyContainer, BodyContent, BodyItems } from "./BodyElements";

export default function Body() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BodyContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <BodyContent>
        <BodyItems>
          <h1>Our Best Pizza Ever</h1>
          <p>Ready in 5 minutes</p>
          <button>Place Order</button>
        </BodyItems>
      </BodyContent>
    </BodyContainer>
  );
}
