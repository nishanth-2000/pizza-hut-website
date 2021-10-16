import React from "react";
import { Nav, NavIcon, NavLink, PizzaIcon } from "./NavbarElements";

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <PizzaIcon />
        </NavIcon>
      </Nav>
    </>
  );
}
