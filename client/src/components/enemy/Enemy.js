import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Enemy(props) {
	const { health, isIn, level, name, img } = props;
	const [inProp, setInProp] = useState(isIn);

	useEffect(() => {
		if (health <= 0) {
			setInProp(false);
		} else {
			setInProp(true);
		}
	}, [health]);

	return (
		<div className="battle-enemy">
			<div className="nes-container battle-enemy-stats">
				<h3>{name}</h3>
				<div className="level">:L {level}</div>
				<div className="hp">
					HP:
					<progress className="nes-progress is-success health-bar" value={health} max="100" />
				</div>
			</div>
			<CSSTransition in={inProp} timeout={2000} classNames="enemy">
				<img src={img} alt="Enemy Logo" className="enemy-logo" />
			</CSSTransition>
		</div>
	);
}