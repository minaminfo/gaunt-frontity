import React from "react";
import { styled } from "frontity";
import Copyright from "./footer/copyright";
import SocialLink from "./footer/social";

const Footer = () => (
  <FooterStyle>
    <SocialLink />
    <Copyright />
  </FooterStyle>
);
export default Footer;

const FooterStyle = styled.footer`
  text-align: center;
  border-top: 1px solid rgba(0,0,0,.1);
  height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0;
  p {
    margin: 0;
    font-size: 14px;
  }
`;
