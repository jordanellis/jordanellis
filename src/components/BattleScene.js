import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Enemy from "./Enemy";
import wsuLogo from "../images/wsu_logo_pixel.png";
import westinghouseLogo from "../images/westinghouse_logo_pixel.png";
import gtLogo from "../images/gt_logo_pixel.png";
import chaseLogo from "../images/chase_logo_pixel.png";

export default function BattleScene() {
	const history = useHistory();
	const [radioIndex, setRadioIndex] = useState();
	const [battleMessage, setBattleMessage] = useState();
	const [inProp, setInProp] = useState();
	const [currentHealth, setCurrentHealth] = useState(100);
	const enemies = [
		{name: "Wright State", level: "2013", isIn: false, health: 100, img: wsuLogo},
		{name: "Westinghouse", level: "2014", isIn: false, health: 100, img: westinghouseLogo},
		{name: "Georgia Tech R.I.", level: "2015", isIn: false, health: 100, img: gtLogo},
		{name: "JPMorgan Chase", level: "2017", isIn: false, health: 100, img: chaseLogo}
	];
	const [currentEnemyName, setCurrentEnemyName] = useState(enemies[0].name);
	const [currentEnemyLevel, setCurrentEnemyLevel] = useState(enemies[0].level);
	const [currentEnemyIsIn, setCurrentEnemyIsIn] = useState(enemies[0].isIn);
	const [currentEnemyHealth, setCurrentEnemyHealth] = useState(enemies[0].health);
	const [currentEnemyImg, setCurrentEnemyImg] = useState(enemies[0].img);
	const enemyHealthRef = useRef(currentEnemyHealth);
	useEffect(() => setInProp(true), []);

	const onOKClick = () => {
		console.log("onOKClick");
		if (radioIndex === 3) {
			// TODO are you sure msg
			history.push("/");
		} else if (radioIndex === 0) {
			decreaseHealth(34);
		} else if (radioIndex === 1) {
			
		} else if (radioIndex === 2) {
			
		}
	}

	const decreaseHealth = (amount) => {
		const endHealth = enemyHealthRef.current - amount;
		const timer = setInterval(() => {
	    	enemyHealthRef.current = enemyHealthRef.current - 1;
	    	setCurrentEnemyHealth(enemyHealthRef.current);
	    	if (enemyHealthRef.current <= 0) {
	    		// TODO new enemy
	    		clearInterval(timer);
	    	} else if (enemyHealthRef.current === endHealth) {
	    		clearInterval(timer);
	    	}
	    }, 25);
	}
	

	return (
		<div>
			<div className="nes-container battle-scene">
				<Enemy
					health={currentEnemyHealth}
					isIn={currentEnemyIsIn}
					level={currentEnemyLevel}
					name={currentEnemyName}
					img={currentEnemyImg}
				/>
				<div className="battle-self">
					<CSSTransition in={inProp} timeout={2000} classNames="battle-self">
						<i className="nes-ash battle-self-img" />
					</CSSTransition>
					<div className="nes-container battle-self-stats">
						<h3>Jordan Ellis</h3>
						<div className="level">:L 18</div>
						<div className="hp">
							HP:
							<progress className="nes-progress is-success health-bar" value={currentHealth} max="100" />
						</div>
						<div className="hp-values">
							<span>{currentHealth}</span><span>/</span><span>100</span>
						</div>
					</div>
				</div>
				<div className="nes-container is-rounded battle-text-display">
					<p className="battle-messages">{battleMessage}</p>
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