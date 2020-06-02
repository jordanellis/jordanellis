import React from "react";
import { Link } from "react-router-dom";

export default function Controls() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Ellis Adventures</p>
      <p>Begin your trial.</p>
      <table className="menu">
        <tbody>
          <tr>
            <td>
              <button type="button" className="nes-btn is-primary">
                Begin
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Link className="nes-btn" to="/controls/">
                Controls
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
