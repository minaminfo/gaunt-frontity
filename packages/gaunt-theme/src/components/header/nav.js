import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./../link";
const Nav = ({ state }) => {
  return (
    <NavStyle>
      {state.theme.menu.map(([name, link]) => {
        const isCurrentPage = state.router.link === link;
        return (
          <NavItem key={name}>
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </Link>
          </NavItem>
        );
      })}
    </NavStyle>
  );
};
export default connect(Nav);

// styling
const NavStyle = styled.div`
  display: none;
  @media (min-width: 48em) {
    display: block;
  }
`;
const NavItem = styled.div`
  display: inline-block;
  a {
    margin-left: 2em;
  }
`;
