import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Link from "../link";


const Pagination = ({ state, actions, libraries }) => {
  const {totalPages, next, previous, page} = state.source.get(state.router.link);
  return (
  	<Div>
  		{previous && <LinkStyle link={previous} css={css`transform: rotate(45deg);`} aria-label="previous page"></LinkStyle>}
  		<span>
  			<span aria-label="current page number" tabindex="1"><b>{page}</b></span>⧸<span aria-label="total page">{totalPages}</span>
  		</span>
  		{next && <LinkStyle link={next} css={css`transform: rotate(225deg);`} aria-label="next page"></LinkStyle>}

  	</Div>
  )
};

export default connect(Pagination);

const LinkStyle = styled(Link)`
	width: 1em;
	height: 1em;
	border: 3px solid #414141;
	border-top: 0;
	border-right: 0;
	display: inline-block;
`;
const Div = styled.div`
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2em 1em;
`