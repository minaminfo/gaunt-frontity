import React from "react";
import { styled, connect, css } from "frontity";

const Comment = ({ state, post }) => {
	console.log('##########',post);
	return (
		<>
			<form >
				<input type="text" placeholder="name" name="name" />
				<input type="email" placeholder="email" name="email" />
			</form>
		</>
	)
}
export default connect(Comment);


// https://public-api.wordpress.com/oauth2/authorize?client_id=68528&redirect_url=http://localhost/&response_type=token