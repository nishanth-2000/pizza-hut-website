import React from "react";
import { Nav, NavIcon, NavLink, PizzaIcon } from "./NavbarElements";

export default function index() {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <PizzaIcon />
        </NavIcon>
      </Nav>
    </>
  );
}
