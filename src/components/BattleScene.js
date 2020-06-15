import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Enemy from "./enemy/Enemy";
import enemyData from "./enemy/enemy-data";

export default function BattleScene() {
	const history = useHistory();
	const [radioIndex, setRadioIndex] = useState();
	const [battleMessage, setBattleMessage] = useState();
	const [inProp, setInProp] = useState();
	const [currentSelfHealth, setCurrentSelfHealth] = useState(100);
	const [currentEnemyName, setCurrentEnemyName] = useState(enemyData[0].name);
	const [currentEnemyLevel, setCurrentEnemyLevel] = useState(enemyData[0].level);
	const [currentEnemyIsIn, setCurrentEnemyIsIn] = useState(enemyData[0].isIn);
	const [currentEnemyHealth, setCurrentEnemyHealth] = useState(enemyData[0].health);
	const [currentEnemyImg, setCurrentEnemyImg] = useState(enemyData[0].img);
	const [currentEnemy, setCurrentEnemy] = useState(enemyData[0]);
	const selfHealthRef = useRef(currentSelfHealth);
	const enemyHealthRef = useRef(currentEnemyHealth);

	useEffect(() => {
		setCurrentEnemyName(currentEnemy.name);
		setCurrentEnemyLevel(currentEnemy.level);
		setCurrentEnemyIsIn(currentEnemy.isIn);
		setCurrentEnemyHealth(currentEnemy.health);
		setCurrentEnemyImg(currentEnemy.img);
	}, [currentEnemy]);

	useEffect(() => setInProp(true), []);

	const sleep = (milliseconds) => {
	  return new Promise(resolve => setTimeout(resolve, milliseconds))
	}

	const onOKClick = () => {
		if (radioIndex === 3) {
			// TODO are you sure msg
			history.push("/");
		} else if (radioIndex === 0) {
			decreaseEnemyHealth(34).then((isEnemyHealthZero) => {
				if (!isEnemyHealthZero) {
					decreaseSelfHealth(20).then((isSelfHealthZero) => {
						isSelfHealthZero && setBattleMessage("you lose");
						// TODO you lose
					});
				} else {
					// TODO new enemy
				}
			});
		} else if (radioIndex === 1) {
			
		} else if (radioIndex === 2) {
			
		}
	}

	const decreaseSelfHealth = async (amount) => {
		setBattleMessage(currentEnemyName + " took its toll on Jordan");
		await sleep(2000);
		return decreaseHealth(selfHealthRef, amount, setCurrentSelfHealth);
	}

	const decreaseEnemyHealth = async (amount) => {
		setBattleMessage("Jordan worked hard at " + currentEnemyName);
		await sleep(2000);
		return decreaseHealth(enemyHealthRef, amount, setCurrentEnemyHealth);
	}

	const decreaseHealth = (healthRef, amount, setHealth) => {
		return new Promise((resolve) => {
			const endHealth = healthRef.current - amount;
			const timer = setInterval(() => {
				if (healthRef.current === endHealth) {
	    		clearInterval(timer);
	    		resolve(healthRef.current <= 0);
	    		return;
	    	}
	    	healthRef.current = healthRef.current - 1;
	    	setHealth(healthRef.current);
	    }, 15);
		});
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
							<progress className="nes-progress is-success health-bar" value={currentSelfHealth} max="100" />
						</div>
						<div className="hp-values">
							<span>{currentSelfHealth}</span><span>/</span><span>100</span>
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
										<input
											type="radio"
											className="nes-radio"
											name="answer"
											onChange={() => setRadioIndex(0)}
											checked={radioIndex === 0}
											/>
										<span>Work</span>
									</label></td>
									<td><label>
										<input
											type="radio"
											className="nes-radio"
											name="answer"
											onChange={() => setRadioIndex(1)}
											checked={radioIndex === 1}
											/>
										<span>Study</span>
									</label></td>
								</tr>
								<tr>
									<td><label>
										<input
											type="radio"
											className="nes-radio"
											name="answer"
											onChange={() => setRadioIndex(2)}
											checked={radioIndex === 2}
											/>
										<span>Sleep</span>
									</label></td>
									<td><label>
										<input
											type="radio"
											className="nes-radio"
											name="answer"
											onChange={() => setRadioIndex(3)}
											checked={radioIndex === 3}
											/>
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