import React from "react";
import "./ResumeLayout.scss";

// import Skills from "./Skills";
// import Publications from "./Publications";
import WorkExperience from "../work-experience/WorkExperience";

const ResumeLayout = () => {
  return (
    <div className="resume-layout">
      {/* Left Column */}
        <WorkExperience />
        {/* Later we’ll add Education, Projects here */}
      </div>

      {/* Right Column */}
      <div className="resume-layout__right">
        Skills {/* <Skills /> */}
        Pblications{/* <Publications /> */}
        {/* Later we’ll add Certifications, Languages, Interests */}
    </div>
      </div>1342870134289)1342870913
  );
};

export default ResumeLayout;
