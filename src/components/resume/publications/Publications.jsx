import React from "react";
import "./Publications.scss"

const PUBLICATIONS_DATA = [
    {
        title:
            "Inset-Feed Compact Millimeter-Wave Microstrip Patch Antenna at 28 GHz for 5G Applications",
        journal:
            "International Research Journal of Engineering and Technology (IRJET)",
        details: "Vol. 6, Issue 3, March 2019",
    },
    {
        title: "AES Modes of Operation",
        journal:
            "International Journal of Innovative Technology and Exploring Engineering (IJITEE, Elsevier, Scopus-Indexed)",
        details: "ISSN 2278-3075, Vol. 8, July 2019",
    },
];

const Publications = () => {
    return (
        <div className="publications">
            <h2 className="publications-title">Publications</h2>
            <ul className="publications__list">
                {PUBLICATIONS_DATA.map((pub, index) => (
                    <li key={index} className="publications__item">
                        <span className="publications__titleText">
                            <em>{pub.title}</em>.
                        </span>{" "}
                        <span className="publications__journal">
                            <strong>{pub.journal}</strong>,
                        </span>{" "}
                        <span className="publications__details">{pub.details}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Publications