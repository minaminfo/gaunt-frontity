import React from "react";
import { connect, styled } from "frontity";
import { FiX, FiMenu, FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";

const MenuIcon = ({ state, actions }) => {
  const { isMobileMenuOpen, searchExpanded } = state.theme;
  const { toggleMobileMenu, toggleSearch } = actions.theme;
  return (
    <>
      <IconContext.Provider value={{ size: "1.7em" }}>
        {isMobileMenuOpen || (
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
        )}
        {searchExpanded || (
          <MenuIconStyle
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close main menu" : "open main menu"}
          >
            {isMobileMenuOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </MenuIconStyle>
        )}
      </IconContext.Provider>
    </>
  );
};
export default connect(MenuIcon);

const MenuIconStyle = styled.button`
  border: 0;
  padding: 0;
  position: relative;
  z-index: 5;
  &:first-of-type {
    margin-right: 1em;
  }
  @media (min-width: 48em) {
    display: none;
  }
`;
