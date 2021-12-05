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
        <SidebarLink to="/catagory?name=veg">Veg Pizza</SidebarLink>
        <SidebarLink to="/catagory?name=mix">Mix Pizza</SidebarLink>
        <SidebarLink to="/catagory?name=full">Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SidebarWrap>
    </SidebarContainer>
  );
}
