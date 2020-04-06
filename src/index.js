import React from "react";
import { Global, css } from "frontity";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

const Root = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: sans-serif;
            background: #ebebeb;
            color: #414141;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
            color: #414141;
            &:hover {
              color: black;
            }
          }
        `}
      />
      {/* Our main document */}
      <div
        css={css`
          max-width: 60em;
          margin: auto;
          padding: 0 1em;
        `}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};
export default {
  name: "minam-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      showAuthor: true,
      isMobileMenuOpen: false,
      searchExpanded: false,
      logoImage: "https://res.cloudinary.com/minam/image/upload/v1586166045/logo-omg.svg",
      colors: {
        backgroundClr: "#ebebeb",
        foregroundClr: "#414141",
      },
      menu: [
        ["Home", "/"],
        ["About", "/about/"],
        ["Contact", "/contact/"],
      ],
    },
    footer: {
      copyright: "Copyright M. Inam",
      social: {
        facebook: "https://facebook.com/minam.info",
        twitter: "https://twitter.com/minam_info",
      },
    },
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      toggleSearch: ({ state }) => {
        state.theme.searchExpanded = !state.theme.searchExpanded;
      },
    },
  },
};
