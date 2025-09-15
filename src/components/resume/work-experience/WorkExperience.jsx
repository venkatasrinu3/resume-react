import React from "react";
import "./WorkExperience.scss";
import { AlignCenter } from "lucide-react";

const WorkExperience = () => {
  return (
    <section className="work-experience" style={{textAlign: "left"}}>
      <h2 className="work-experience__title">WORK EXPERIENCE</h2>

      {/* Senior Software Engineer */}
      <div className="work-experience__item">
        <h3 className="work-experience__role">Senior Software Engineer</h3>
        <p className="work-experience__company">
          CitiusTech Healthcare Technology Pvt Ltd
        </p>
        <p className="work-experience__meta">
          <span className="work-experience__date">10/2021 – Present</span>{" "}
          <span className="work-experience__location">Bangalore, Karnataka</span>
        </p>
        <p className="work-experience__subtitle">Achievements/Tasks</p>
        <ul className="work-experience__details">
          <li>Awarded Certificate of Appreciation for exceptional project performance and promoted to Senior Software Engineer</li>
          <li>Optimized application performance, reducing load times by 30% and improving user experience for clinicians.</li>
          <li>Implemented micro-frontend architecture to improve scalability and maintainability of healthcare products.</li>
          <li>Collaborated with cross-functional teams (QA, Product, DevOps) in an 
            Agile/Scrum environment to deliver high-quality healthcare solutions
            </li>
        </ul>
      </div>

      {/* UI Developer */}
      <div className="work-experience__item">
        <h3 className="work-experience__role">UI Developer</h3>
        <p className="work-experience__company">
          Aggregate Intelligence India Private Limited
        </p>
        <p className="work-experience__meta">
          <span className="work-experience__date">10/2020 – 10/2021</span>{" "}
          <span className="work-experience__location">Coimbatore, Tamil Nadu</span>
        </p>
      </div>

      {/* Assistant Professor */}
      <div className="work-experience__item">
        <h3 className="work-experience__role">Assistant Professor</h3>
        <p className="work-experience__company">
          Vignan's Institute of Information and Technology
        </p>
        <p className="work-experience__meta">
          <span className="work-experience__date">09/2015 – 10/2019</span>{" "}
          <span className="work-experience__location">
            Visakhapatnam, Andhra Pradesh
          </span>
        </p>
      </div>
    </section>
  );
};

export default WorkExperience;
