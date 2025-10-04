import React from "react";
import "./WorkExperience.scss";
import { AlignCenter } from "lucide-react";

const WorkExperience = () => {
  return (
    <section className="work-experience" style={{textAlign: "left"}}>
      <h2 className="work-experience__title">Work Experience</h2>

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
        {/* <p className="work-experience__subtitle">Achievements/Tasks</p> */}
        <ul className="work-experience__details">
          <li>Recognized with a <i>certificate of appreciation</i>  for delivering high-impact project results and promoted to Senior Software Engineer within 12 months</li>
          <li>Implemented micro frontend architecture using ReactJS and Redux, improving scalability and reducing deployment cycles by 20%, which enhanced maintainability of healthcare applications.</li>
        </ul>
      </div>

      {/* UI Developer */}
      <div className="work-experience__item">
        <h3 className="work-experience__role">UI Developer</h3>
        <p className="work-experience__company" style={{marginBottom: "4px"}}>
          Aggregate Intelligence India Private Limited
        </p>
        <p className="work-experience__meta">
          <span className="work-experience__date">10/2020 – 10/2021</span>{" "}
          <span className="work-experience__location">Coimbatore, Tamil Nadu</span>
        </p>
        {/* <p className="work-experience__subtitle">Achievements/Tasks</p> */}
        <ul className="work-experience__details">
          <li>Developed 30+ pricing dashboards with ApexCharts, enabling data-driven decisions and reducing analysis time by 20%.</li>
          <li>Improved UI performance by 25% through code refactoring and optimization.</li>
        </ul>
      </div>

      {/* Assistant Professor */}
      <div className="work-experience__item">
        <h3 className="work-experience__role">Assistant Professor</h3>
        <p className="work-experience__company">
          Vignan's Institute of Information Technology
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
