import React from "react";
import { Link } from "react-router-dom";

import reactLogo from '../images/react-logo.svg';
import reactRouterLogo from '../images/react-router-logo.png';
import d3logo from '../images/d3-logo.png';

export default function BuiltWith() {
  return (
    <div className="nes-container with-title is-centered built-with-container">
      <p className="title">Built With</p>
      <table className="menu">
        <tbody>
          <tr>
            <td className="nes-text is-primary">
              <img className="built-with-image" src={reactLogo} alt="React Logo" width="50" height="50" />
              ReactJS
            </td>
          </tr>
          <tr>
            <td className="nes-text is-primary">
              <img className="built-with-image" src={reactRouterLogo} alt="React Router Logo" width="92" height="50" />
              React Router
            </td>
          </tr>
          <tr>
            <td className="nes-text is-primary">
              <img className="built-with-image" src={d3logo} alt="D3 Logo" width="50" height="50" />
              D3
            </td>
          </tr>
          <tr>
            <td className="nes-text is-primary">
              <i className="nes-logo built-with-image" />
              NES.css
            </td>
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
