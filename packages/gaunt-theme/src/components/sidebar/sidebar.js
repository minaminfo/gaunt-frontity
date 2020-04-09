import React from "react";
import { styled } from "frontity";
import Categories from "./categories";
const Sidebar = () => {
  return (
    <SidebarStyle>
      <Categories />
    </SidebarStyle>
  );
};
export default Sidebar;

const SidebarStyle = styled.aside`
  @media (min-width: 48em) {
    width: 20em;
    padding: 1em;
    margin-left: 2em;
    align-self: flex-start;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
