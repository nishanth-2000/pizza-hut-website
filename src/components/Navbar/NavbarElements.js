import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background-color: transparent;
  height: 100px;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

export const NavLink = styled(Link)`
  color: #ffff;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 150%);
    font-weight: bold;
  }
`;

export const PizzaIcon = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, 10%);
`;
