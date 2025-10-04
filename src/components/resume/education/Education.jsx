import React from "react";
import "./Education.scss";

const EDUCATION_DATA = [
    {
        degree: "MTech",
        college: "Andhra University College of Engineering",
        date: "09/2013 - 10/2015",
        location: "Andhra Pradesh",
        gpa: "8.76",
        course: "Radar and Microwave Engineering"
    },
    {
        degree: "BE",
        college: "Francis Xavier Engineering College",
        date: "08/2008 - 04/2012",
        location: "Tamil Nadu",
        gpa: "7.8",
        course: "Electronics and Communication Engineering"
    }
];

const Education = () => {
    return (
        <section className="education">
            <h2 className="education__title">EDUCATION</h2>
            {EDUCATION_DATA.map((edu, index) => (
                <div key={index} className="education__item">
                    <h3 className="education__degree">{edu.degree}</h3>
                    <p className="education__college">{edu.college}</p>
                    <div className="education__meta">
                        <span className="education__date">{edu.date}</span>
                        <span className="education__location">
                            {edu.location}
                        </span>
                    </div>
                    <div className="education__meta"style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p className="education__subtitle">Course</p>
                        <span className="education__location">GPA: {edu.gpa}</span>
                    </div>
                    <ul className="education__details">
                        <li>{edu.course}</li>
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Education;
