import React from "react";
import { Link } from "react-router-dom";

export default function MakerID() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">SMM2 ID</p>
      <table className="menu">
        <tbody>
          <tr>
            <td className="nes-text is-primary">DBB-7D0-JGF</td>
          </tr>
          <tr>
            <td>
              <Link className="nes-btn" to="/">
                Home
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
