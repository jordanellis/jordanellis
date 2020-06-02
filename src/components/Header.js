import React from "react";
import { useHistory } from "react-router-dom";

export default function Header() {
	const history = useHistory();
	return (
	<section className="header">
		<span className="nes-text header-button" onClick={() => history.push("/")}>
			<i className="snes-logo header-logo" />
			Jordan Ellis
		</span>
	</section>
	);
}