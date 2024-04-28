import React from "react";
import { works } from "../utils/works";

const Work: React.FC = () => {
  return (
    <div>
      <h2>Work Experience</h2>
      {works.map((work, index) => (
        <div key={index}>
          <h3>
            {work.position} - {work.companyName}
          </h3>
          <p>{work.location}</p>
          <p>{`${work.startDate} - ${work.endDate}`}</p>
          <ul>
            {work.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Work;
