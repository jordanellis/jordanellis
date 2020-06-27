import React from "react";

export default function JobExperience(props) {
  const {company, title, skills, jobTasks} = props.experience;

  return (
    <div className="job-experience">
      <div className="nes-container with-title">
        <p className="title">{company}</p>
        <div className="nes-badge job-title">
          <span className="is-success">{title}</span>
        </div>
        <br/>
        {skills.map((skill, keyValue) => {
          return (
            <div className="nes-badge">
              <span className="is-primary">{skill}</span>
            </div>
          );
        })}
        <div className="lists">
          <ul className="nes-list is-circle">
            {jobTasks.map((jobTask, keyValue) => {
              return (
                <li>{jobTask}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
