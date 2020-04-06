import React from "react";
import { connect, styled } from "frontity";
import SearchForm from "./search/form";

const SearchSection = () => {
	return (
		<SearchSectionStyle>
			<SearchForm />
		</SearchSectionStyle>
	)
}
export default connect(SearchSection);

const SearchSectionStyle = styled.div`
	padding: 2em 1em;
	margin: auto;
	@media (min-width: 48em){
		width: 60%;
	}
`;