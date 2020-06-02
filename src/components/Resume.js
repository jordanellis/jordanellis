import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

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
      <Link className="nes-btn" to="/">
        Home
      </Link>
      <div className={hasAnswered ? "nes-container" : "nes-container with-title"}>
        {!hasAnswered ?
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
        :
          <div>begin</div>
        }
      </div>
    </div>
  );
}
