import React from "react";
import { Link } from "react-router-dom";

export default function Controls() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Controls</p>
      <table className="menu">
        <tbody>
          <tr>
            <td>~</td>
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
