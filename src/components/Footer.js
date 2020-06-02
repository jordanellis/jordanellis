import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <span className="footer-text">Contact:</span>
      <a href="mailto:jordanellis620@gmail.com"><i className="nes-icon gmail is-medium" /></a>
      <a href="https://www.linkedin.com/in/jordan-ellis-781a29147/"><i className="nes-icon linkedin is-medium" /></a>
      <a href="https://github.com/jordanellis"><i className="nes-icon github is-medium" /></a>
      <Link to="/maker-id/"><i className="nes-mario mario-head-only"></i></Link>
    </section>
  );
}