import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Ellis Adventures</p>
      <p>View his journey.</p>
      <table className="menu">
        <tbody>
          <tr>
            <td>
              <Link className="nes-btn is-primary" to="/resume/">
                Begin
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link className="nes-btn is-primary" to="/skills/">
                Skills
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link className="nes-btn" to="/built-with/">
                Tools
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
