import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Typewriter from 'typewriter-effect';

import Enemy from "./enemy/Enemy";
import enemyData from "./enemy/enemy-data";

export default function BattleScene() {
	const history = useHistory();
	const [radioIndex, setRadioIndex] = useState();
	const [battleMessage, setBattleMessage] = useState();
	const [inProp, setInProp] = useState();
	const [currentSelfHealth, setCurrentSelfHealth] = useState(100);
	const [isBattleBusy, setIsBattleBusy] = useState(false);
	const SLEEP_TIME = 3000;

	const enemyIndex = useRef(0);
	const [currentEnemyName, setCurrentEnemyName] = useState();
	const [currentEnemyLevel, setCurrentEnemyLevel] = useState();
	const [currentEnemyIsIn, setCurrentEnemyIsIn] = useState();
	const [currentEnemyHealth, setCurrentEnemyHealth] = useState();
	const [currentEnemyImg, setCurrentEnemyImg] = useState();
	const [currentEnemyLearned, setCurrentEnemyLearned] = useState();
	const selfHealthRef = useRef(currentSelfHealth);
	const enemyHealthRef = useRef(currentEnemyHealth);

	const [currentEnemy, setCurrentEnemy] = useState(enemyData[enemyIndex.current]);
	useEffect(() => {
		setCurrentEnemyName(currentEnemy.name);
		setCurrentEnemyLevel(currentEnemy.level);
		setCurrentEnemyIsIn(currentEnemy.isIn);
		setCurrentEnemyHealth(currentEnemy.health);
		setCurrentEnemyImg(currentEnemy.img);
		setCurrentEnemyLearned(currentEnemy.learned);
		enemyHealthRef.current = currentEnemy.health;
	}, [currentEnemy]);

	useEffect(() => {
		setInProp(true);
	}, []);

	const sleep = (milliseconds) => {
	  return new Promise(resolve => setTimeout(resolve, milliseconds))
	}

	const onSelectClick = async () => {
		if (isBattleBusy) {
			return;
		}
		if (radioIndex === 3) {
			showAreYouSureDialog();
		} else if (radioIndex === 0) {
			userWorksHard();
		} else if (radioIndex === 1) {
			slackOff();
		} else if (radioIndex === 2) {
			increaseHealth();
		}
	}

	const userWorksHard = async () => {
		setIsBattleBusy(true);
		decreaseEnemyHealth().then((isEnemyHealthZero) => {
			if (!isEnemyHealthZero) {
				enemysTurn();
			} else {
				nextEnemy();
			}
		});
	}

	const nextEnemy = async () => {
		if (enemyIndex.current === enemyData.length-1) {
			showWinDialog();
		} else {
			await showLearned();
			enemyIndex.current++;
			setCurrentEnemy(enemyData[enemyIndex.current]);
			setIsBattleBusy(false);
		}
	}

	const showLearned = async () => {
		setBattleMessage(currentEnemyName + " fainted");
		await sleep(SLEEP_TIME);
		setBattleMessage("Jordan leveled up and learned " + currentEnemyLearned + "!");
		await sleep(SLEEP_TIME);
		setBattleMessage("");
	}

	const enemysTurn = async () => {
		decreaseSelfHealth().then((isSelfHealthZero) => {
			setIsBattleBusy(false);
			isSelfHealthZero && showGameOverDialog();
		});
	}

	const slackOff = async () => {
		setIsBattleBusy(true);
		setBattleMessage("Jordan slacked off... smh...");
		await sleep(SLEEP_TIME);
		await enemysTurn();
	}

	const decreaseSelfHealth = async () => {
		setBattleMessage(currentEnemyName + " took its toll on Jordan");
		await sleep(SLEEP_TIME);
		return changeHealth(selfHealthRef, 20, setCurrentSelfHealth);
	}

	const decreaseEnemyHealth = async () => {
		setBattleMessage("Jordan worked hard at " + currentEnemyName);
		await sleep(SLEEP_TIME);
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
		setIsBattleBusy(true);
		setBattleMessage("Ahh... Sleep. That feels better!");
		await sleep(SLEEP_TIME);
		await changeHealth(selfHealthRef, (selfHealthRef.current - 100), setCurrentSelfHealth, true);
		setIsBattleBusy(false);
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
					<div className="battle-messages">
						<Typewriter
							options={{
							    strings: battleMessage,
							    autoStart: true,
							    delay: 40,
							    cursor: ""
							}}
						/>
					</div>
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
			<div className="battle-select-button-container">
				<button
					type="button"
						className={isBattleBusy ? "battle-select-button nes-btn is-disabled" : "battle-select-button nes-btn is-primary"}
						onClick={onSelectClick}>
					Select
				</button>
			</div>
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
		      <menu className="dialog-menu">
		        <button className="nes-btn is-primary" onClick={onOKDialogClick}>OK</button>
		      </menu>
			  </dialog>
			</section>
		</div>
	);
}