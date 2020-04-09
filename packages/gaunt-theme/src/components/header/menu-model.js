import React from "react";
import { styled, connect } from "frontity";
import Link from "./../link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;

  return (
    <div>
      <MenuContent>
        {menu.map(([name, link]) => (
          <MenuLink
            key={name}
            link={link}
            aria-current={state.router.link === link ? "page" : undefined}
          >
            {name}
          </MenuLink>
        ))}
      </MenuContent>
    </div>
  );
};

const MenuContent = styled.nav`
  background-color: #ebebebe0;
  z-index: 3;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuLink = styled(Link)`
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 5px;
  &[aria-current="page"] {
    border: 1px solid #414141;
  }
`;

export default connect(MenuModal);
