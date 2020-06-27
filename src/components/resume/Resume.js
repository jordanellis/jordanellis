import React from "react";
import { Link } from "react-router-dom";

import JobExperience from "./JobExperience";
import experience from "./experience";

export default function Resume() {
  return (
    <div>
      {experience.map((experience, keyValue) => {
        return (
          <JobExperience key={keyValue} experience={experience} />
        );
      })}
      <Link className="nes-btn" to="/">
        Done
      </Link>
    </div>
  );
}
