import React from "react";
import { Link } from "react-router-dom";

export default function Controls() {
  return (
    <div className="nes-container with-title is-centered">
      <h1 className="title">Controls</h1>
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
