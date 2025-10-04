import React, {useState} from "react";
import "./Skills.scss";

const SKILLS_DATA = [
    {
        category: "Front-end Technologies",
        skillsList: ["HTML", "CSS", "SCSS", "BootStrap", "JavaScript (ES6+)", "TypeScript", "ReactJs", "Redux", "Redux-toolkit", "React-Bootstrap", "Material UI"]
    },
    {
        category: "Back-end Technologies / Testing",
        skillsList: ["Node.js", "Express.js", "Core Java", "Jest", "Enzyme"]
    },
    {
        category: "Database",
        skillsList: ["MongoDb", "SQL", "PostgreSQL"]
    },
    {
        category: "Architecture / Data Visualization",
        skillsList: ["Micro-Frontend", "React Apex Charts"]
    }
]

const Skills = () => {
    const [skillsData] = useState([...SKILLS_DATA]);
    return (
        <div className="skills-wrapper">
            <h2 className="skills-title">Skills</h2>
            {
                skillsData?.map((data) => {
                    return (
                        <div className="skills-data">
                            <div className="skills-data-heading">{data?.category}</div>
                            <div className="skills-data-content">
                                {data.skillsList.map((skill) => (
                                    <div className="skills-block">{skill}</div> 
                                ))}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Skills