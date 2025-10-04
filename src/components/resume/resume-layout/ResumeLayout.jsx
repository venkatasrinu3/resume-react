import React from "react";
import "./ResumeLayout.scss";

// import Skills from "./Skills";
// import Publications from "./Publications";
import WorkExperience from "../work-experience/WorkExperience";
import Skills from "../skills/Skills";
import Education from "../education/Education";
import Publications from "../publications/Publications";

const ResumeLayout = () => {
  return (
    <div className="resume-layout">
      {/* Left Column */}
      <div className="resume-layout__left">
        <WorkExperience />
        {/* <Education /> */}
      </div>
      {/* Later we’ll add Education, Projects here */}

      {/* Right Column */}
      <div className="resume-layout__right">
        <Skills />
        
        {/* Later we’ll add Certifications, Languages, Interests */}
      </div>
    </div>
  );
};

export default ResumeLayout;
