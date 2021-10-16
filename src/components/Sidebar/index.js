import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrap,
  SidebarRoute,
} from "./SidebarElements";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/veg">Veg Pizza</SidebarLink>
        <SidebarLink to="/veg">Mix Pizza</SidebarLink>
        <SidebarLink to="/veg">Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SidebarWrap>
    </SidebarContainer>
  );
}
