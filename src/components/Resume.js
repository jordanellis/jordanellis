import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import BattleScene from "./BattleScene";
import Loading from "./Loading";

export default function Resume() {
  const history = useHistory();
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLoading] = useState(true);

  const handleReadyChange = () => setIsReady(isReady => !isReady);

  const onContinueClick = () => {
    if (!isReady) {
      history.push("/");
    } else {
      setHasAnswered(true);
    }
  }

  return (
    <div>
      {!hasAnswered ?
      <div className="nes-container">
        <div className="are-you-ready">
          <p className="is-ready-ask">Are you ready?</p>
          <div className="is-ready-menu">
            <label>
              <input type="radio" className="nes-radio" name="answer" onChange={handleReadyChange} checked={isReady} />
              <span>Yes</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" name="answer" onChange={handleReadyChange} checked={!isReady} />
              <span>No</span>
            </label>
          </div>
          <div className="is-ready-button">
            <button
                type="button"
                className="nes-btn is-primary"
                onClick={onContinueClick}>
              Continue
            </button>
          </div>
        </div>
      </div>
      :
        <Loading
          className="loading"
          loading={isLoading}
          initial={0}
          max={100}
          component={<BattleScene />} />
      }
    </div>
  );
}
