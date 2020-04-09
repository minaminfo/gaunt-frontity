import React from "react";
import { connect, styled } from "frontity";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { IconContext } from "react-icons";

const SocialLink = ({ state }) => {
    const { social } = state.footer;

    return (
    <SocialLinkStyle>
        <IconContext.Provider value={{ size: "1.5em", }}>
        <a href={social.twitter} aria-label="twitter link"><FiInstagram aria-hidden="true" /></a>
        <a href={social.facebook} aria-label="facebook link"><FiFacebook aria-hidden="true" /></a>
        <a href={social.twitter} aria-label="twitter link"><FiTwitter aria-hidden="true" /></a>
        </IconContext.Provider>
    </SocialLinkStyle>
    );
}
export default connect(SocialLink);

const SocialLinkStyle = styled.div`
	a {
		margin-left: 1em;
        &:first-of-type{
            margin: 0;
        }
	}
`;