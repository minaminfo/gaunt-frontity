import React from "react";
import { styled, connect } from "frontity";
import Link from "./../link";
const HeaderLogo = ({state}) => {
	const {logoImage} = state.theme;
	return(
		<Link link={"/"}><LogoImg src={logoImage} alt="Logo image" /></Link>
	)
}
export default connect(HeaderLogo);

const LogoImg = styled.img`
	width: 3em;
	height: 3em;
`;