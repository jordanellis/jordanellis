import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function BattleScene() {
	const history = useHistory();
	const [radioIndex, setRadioIndex] = useState();

	const onOKClick = () => {
		if (radioIndex === 3) {
			history.push("/");
		} else {
			
		}
	}

	return (
		<div>
			<div className="nes-container battle-scene">
				<div className="battle-enemy">
					<div className="nes-container battle-enemy-stats">
						<h3>Life</h3>
						<div className="level">:L inf</div>
						<div className="hp">
							HP:
							<progress className="nes-progress is-success health-bar" value="100" max="100" />
						</div>
					</div>
					<i className="nes-squirtle" />
				</div>
				<div className="battle-self">
					<i className="nes-ash" />
					<div className="nes-container battle-self-stats">
						<h3>Jordan Ellis</h3>
						<div className="level">:L 18</div>
						<div className="hp">
							HP:
							<progress className="nes-progress is-success health-bar" value="50" max="100" />
						</div>
						<div className="hp-values">
							<span>50</span><span>/</span><span>100</span>
						</div>
					</div>
				</div>
				<div className="nes-container is-rounded battle-text-display">
					<div className="nes-container is-rounded battle-options">
						<table className="battle-menu">
							<tbody>
								<tr>
									<td><label>
										<input type="radio" className="nes-radio" name="answer" onChange={() => setRadioIndex(0)} checked={radioIndex === 0} />
										<span>Work</span>
									</label></td>
									<td><label>
										<input type="radio" className="nes-radio" name="answer" onChange={() => setRadioIndex(1)} checked={radioIndex === 1} />
										<span>Study</span>
									</label></td>
								</tr>
								<tr>
									<td><label>
										<input type="radio" className="nes-radio" name="answer" onChange={() => setRadioIndex(2)} checked={radioIndex === 2} />
										<span>Sleep</span>
									</label></td>
									<td><label>
										<input type="radio" className="nes-radio" name="answer" onChange={() => setRadioIndex(3)} checked={radioIndex === 3} />
										<span>Run</span>
									</label></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<button
				type="button"
					className="nes-btn is-primary"
					onClick={onOKClick}>
				OK
			</button>
		</div>
	);
}