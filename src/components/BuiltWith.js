import React from "react";
import { Link } from "react-router-dom";

export default function BuiltWith() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Built With</p>
      <table className="menu">
        <tbody>
          <tr>
            <td className="nes-text is-primary">ReactJS</td>
          </tr>
          <tr>
            <td className="nes-text is-primary">React Router</td>
          </tr>
          <tr>
            <td className="nes-text is-primary">D3</td>
          </tr>
          <tr>
            <td className="nes-text is-primary">NES.css</td>
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
