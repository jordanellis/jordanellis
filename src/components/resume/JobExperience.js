import React from "react";
import { Link } from "react-router-dom";

export default function JobExperience(props) {
  const {company, title, skills, jobTasks} = props.experience;

  return (
    <div className="job-experience">
      <div className="nes-container with-title job-experience-container" onClick={props.onClick}>
        <p className="title">{company}</p>
        <div className="nes-badge job-title">
          <span className="is-success">{title}</span>
        </div>
        <br/>
        {skills.map((skill, keyValue) => {
          return (
            <div className="nes-badge" key={keyValue}>
              <span className="is-primary">{skill}</span>
            </div>
          );
        })}
        <div className="lists">
          <ul className="nes-list is-circle">
            {jobTasks.map((jobTask, keyValue) => {
              return (
                <li key={keyValue}>{jobTask}</li>
              );
            })}
          </ul>
        </div>
      </div>
      <Link className="nes-btn" to="/">
        Done
      </Link>
      <div className="footer-padding" />
    </div>
  );
}
