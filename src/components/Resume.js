import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Loading from "./Loading";

export default function Resume() {
  const history = useHistory();
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isReady, setIsReady] = useState(false);

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
      <div className="nes-container with-title">
        <div>
          <p className="title">Are you ready?</p>
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
          <button
              type="button"
              className="nes-btn is-primary center-horizontally"
              onClick={onContinueClick}>
            Continue
          </button>
        </div>
      </div>
      :
        <Loading className="loading" initial={0} max={100} />
      }
    </div>
  );
}
