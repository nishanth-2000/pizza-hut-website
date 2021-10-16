import React from "react";
import Navbar from "../Navbar";
import { BodyContainer, BodyContent, BodyItems } from "./BodyElements";
export default function index() {
  return (
    <BodyContainer>
      <Navbar />
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
