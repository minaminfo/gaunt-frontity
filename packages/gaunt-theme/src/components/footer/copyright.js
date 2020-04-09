import { connect } from "frontity";
import React from "react";
const Copyright = ({ state }) => (
	<p>
		{state.footer.copyright}
	</p>
)
export default connect(Copyright);