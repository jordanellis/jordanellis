import React from "react";
import { Link } from "react-router-dom";

import reactLogo from '../images/react-logo.svg';
import reactRouterLogo from '../images/react-router-logo.png';
import googleChartsLogo from '../images/react-google-charts-logo.png';

export default function BuiltWith() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Built With</p>
      <table className="menu">
        <tbody className="built-with-tbody">
          <tr className="built-with-row">
            <td className="nes-text is-primary">
              <img className="built-with-image" src={reactLogo} alt="React Logo" width="100" height="100" />
              {console.log(process.env.npm_package_name)}
              ReactJS
            </td>
          </tr>
          <tr className="built-with-row">
            <td className="nes-text is-primary">
              <img className="built-with-image" src={reactRouterLogo} alt="React Router Logo" width="161" height="88" />
              React Router
            </td>
          </tr>
          <tr className="built-with-row">
            <td className="nes-text is-primary">
              <img className="built-with-image" src={googleChartsLogo} alt="Google Charts Logo" width="100" height="100" />
              Google Charts
            </td>
          </tr>
          <tr className="built-with-row">
            <td className="nes-text is-primary">
              <i className="nes-logo built-with-image" />
              NES.css
            </td>
          </tr>
          <tr className="built-with-row">
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
