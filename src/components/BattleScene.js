import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Enemy from "./enemy/Enemy";
import enemyData from "./enemy/enemy-data";

export default function BattleScene() {
	const history = useHistory();
	const [radioIndex, setRadioIndex] = useState();
	const [battleMessage, setBattleMessage] = useState();
	const [dialogText, setDialogText] = useState();
	const [inProp, setInProp] = useState();
	const [currentSelfHealth, setCurrentSelfHealth] = useState(100);

	const enemyIndex = useRef(0);
	const [currentEnemyName, setCurrentEnemyName] = useState();
	const [currentEnemyLevel, setCurrentEnemyLevel] = useState();
	const [currentEnemyIsIn, setCurrentEnemyIsIn] = useState();
	const [currentEnemyHealth, setCurrentEnemyHealth] = useState();
	const [currentEnemyImg, setCurrentEnemyImg] = useState();
	const selfHealthRef = useRef(currentSelfHealth);
	const enemyHealthRef = useRef(currentEnemyHealth);

	const [currentEnemy, setCurrentEnemy] = useState(enemyData[enemyIndex.current]);
	useEffect(() => {
		setCurrentEnemyName(currentEnemy.name);
		setCurrentEnemyLevel(currentEnemy.level);
		setCurrentEnemyIsIn(currentEnemy.isIn);
		setCurrentEnemyHealth(currentEnemy.health);
		setCurrentEnemyImg(currentEnemy.img);
		enemyHealthRef.current = currentEnemy.health;
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
					decreaseSelfHealth(50).then((isSelfHealthZero) => {
						isSelfHealthZero && showDialogModal("Game Over");
					});
				} else {
					enemyIndex.current++;
					if (enemyIndex.current >= enemyData.length) {
						// TODO you win
						console.log("you win");
					} else {
						setCurrentEnemy(enemyData[enemyIndex.current]);
					}
				}
			});
		} else if (radioIndex === 1) {
					// Study
		} else if (radioIndex === 2) {
			increaseHealth();
		}
	}

	const decreaseSelfHealth = async (amount) => {
		setBattleMessage(currentEnemyName + " took its toll on Jordan");
		await sleep(2000);
		return changeHealth(selfHealthRef, amount, setCurrentSelfHealth);
	}

	const decreaseEnemyHealth = async (amount) => {
		setBattleMessage("Jordan worked hard at " + currentEnemyName);
		await sleep(2000);
		return changeHealth(enemyHealthRef, amount, setCurrentEnemyHealth);
	}

	const changeHealth = (healthRef, amount, setHealth, add = false) => {
		return new Promise((resolve) => {
			const endHealth = healthRef.current - amount;
			const timer = setInterval(() => {
				if (healthRef.current === endHealth) {
	    		clearInterval(timer);
	    		resolve(healthRef.current <= 0);
	    		return;
	    	}
	    	if (add) {
					healthRef.current = healthRef.current + 1;
	    	} else {
		    	healthRef.current = healthRef.current - 1;
		    }
	    	setHealth(healthRef.current);
	    }, 15);
		});
	}

	const increaseHealth = async () => {
		setBattleMessage("Ahh... Sleep. That feels better!");
		await sleep(2000);
		return changeHealth(selfHealthRef, (selfHealthRef.current - 100), setCurrentSelfHealth, true);
	}

	const onOKDialogClick = () => {history.push("/")}

	const showDialogModal = (text) => {
		setDialogText(text);
		document.getElementById('dialog-rounded').showModal();
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
						<div className="level">{":L " + enemyData[enemyIndex.current].userLevel}</div>
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
			<section>
			  <dialog className="nes-dialog is-rounded" id="dialog-rounded">
		      <p className="dialog-title">{dialogText}</p>
		      <menu className="dialog-menu">
		        <button className="nes-btn is-primary" onClick={onOKDialogClick}>OK</button>
		      </menu>
			  </dialog>
			</section>
		</div>
	);
}