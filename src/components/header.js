import React, { useEffect, useState } from "react";
import { styled, connect } from "frontity";
import Nav from "./header/nav";
import HeaderLogo from "./header/logo";
import MenuIcon from "./header/menuicon";
import MenuModel from "./header/menu-model";
import SearchSection from "./searchsection";

import { FiX, FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";

const Header = ({ state, actions }) => {
  const { isMobileMenuOpen, searchExpanded } = state.theme;
  const { toggleSearch } = actions.theme;

  return (
    <>
      <HeaderStyle>
        <div>
          <HeaderLogo />
        </div>
        <NavStyle>
          <MenuIcon />
          <Nav />
          <IconContext.Provider value={{ size: "1.7em" }}>
            <MenuIconStyle
              onClick={toggleSearch}
              aria-label={
                searchExpanded ? "Close search section" : "open search section"
              }
            >
              {searchExpanded ? (
                <FiX aria-hidden="true" />
              ) : (
                <FiSearch aria-hidden="true" />
              )}
            </MenuIconStyle>
          </IconContext.Provider>
        </NavStyle>
      </HeaderStyle>
      {isMobileMenuOpen && <MenuModel />}
      {searchExpanded && <SearchSection />}
    </>
  );
};
export default connect(Header);

const HeaderStyle = styled.header`
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavStyle = styled.div`
  display: flex;
`;
const MenuIconStyle = styled.button`
  border: 0;
  margin-left: 3em;
  padding: 0;
  display: none;
  @media (min-width: 48em) {
    display: initial;
  }
`;
