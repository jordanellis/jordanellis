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
	const CODE = "C0D3";

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
			showAreYouSureDialog();
		} else if (radioIndex === 0) {
			userWorksHard()
		} else if (radioIndex === 1) {
			slackOff();
		} else if (radioIndex === 2) {
			increaseHealth();
		}
	}

	const userWorksHard = () => {
		decreaseEnemyHealth().then((isEnemyHealthZero) => {
			if (!isEnemyHealthZero) {
				enemysTurn();
			} else {
				if (enemyIndex.current === enemyData.length-1) {
					showWinDialog();
				} else {
					enemyIndex.current++;
					setCurrentEnemy(enemyData[enemyIndex.current]);
				}
			}
		});
	}

	const enemysTurn = () => {
		decreaseSelfHealth().then((isSelfHealthZero) => {
			isSelfHealthZero && showGameOverDialog();
		});
	}

	const slackOff = async () => {
		setBattleMessage("Jordan slacked off... smh...");
		await sleep(1500);
		enemysTurn();
	}

	const decreaseSelfHealth = async () => {
		setBattleMessage(currentEnemyName + " took its toll on Jordan");
		await sleep(1500);
		return changeHealth(selfHealthRef, 20, setCurrentSelfHealth);
	}

	const decreaseEnemyHealth = async () => {
		setBattleMessage("Jordan worked hard at " + currentEnemyName);
		await sleep(1500);
		return changeHealth(enemyHealthRef, 34, setCurrentEnemyHealth);
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
		await sleep(1500);
		return changeHealth(selfHealthRef, (selfHealthRef.current - 100), setCurrentSelfHealth, true);
	}

	const onOKDialogClick = () => {history.push("/")}

	const onNoClick = () => {document.getElementById('are-you-sure-dialog').close()}

	const showGameOverDialog = () => {document.getElementById('game-over-dialog').showModal()}

	const showAreYouSureDialog = () => {document.getElementById('are-you-sure-dialog').showModal()}

	const showWinDialog = () => {document.getElementById('win-dialog').showModal()}

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
										<span>Relax</span>
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
			  <dialog className="nes-dialog is-rounded" id="game-over-dialog">
		      <p className="dialog-title">Game Over</p>
		      <menu className="dialog-menu">
		        <button className="nes-btn is-primary" onClick={onOKDialogClick}>OK</button>
		      </menu>
			  </dialog>
			</section>
			<section>
			  <dialog className="nes-dialog is-rounded" id="are-you-sure-dialog">
		      <p className="dialog-title">Are you sure?</p>
		      <menu className="dialog-menu">
		        <button className="nes-btn is-primary" onClick={onOKDialogClick}>Yes</button>
		        <button className="nes-btn" onClick={onNoClick}>No</button>
		      </menu>
			  </dialog>
			</section>
			<section>
			  <dialog className="nes-dialog is-rounded" id="win-dialog">
		      <p className="dialog-title">You Win!</p>
		      <p>{"The code is: " + CODE}</p>
		      <menu className="dialog-menu">
		        <button className="nes-btn is-primary" onClick={onOKDialogClick}>OK</button>
		      </menu>
			  </dialog>
			</section>
		</div>
	);
}