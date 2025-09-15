import "./ResumeHeader.scss"
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ResumeHeader = () => {
  return (
    <Box component="header" className="resume-header">
      {/* Top Section */}
      <Box className="resume-header__top">
        <Typography variant="h4" className="resume-header__name">
          Nistala Venkata Chaitanya
        </Typography>
        <Typography variant="h6" className="resume-header__title">
          Senior Software Engineer | MERN Stack Developer | Full Stack Developer
        </Typography>

        {/* Summary inside header */}
        <Typography variant="body1" className="resume-header__summary">
          Full Stack Developer with 5 years of experience specializing in MERN Stack
          (MongoDB, Express.js, React.js, Node.js). Proficient in developing scalable
          web applications, RESTful APIs, and micro-frontend architectures. Strong
          expertise in JavaScript (ES6+), TypeScript, Redux, and responsive UI design.
          Proven ability to collaborate in Agile environments and deliver
          high-performance, user-focused solutions.
        </Typography>
      </Box>

      {/* Bottom Contact Strip */}
      <Box className="resume-header__bottom">
        <Box className="resume-header__contact">
          <EmailIcon fontSize="small" />
          <Link href="mailto:chathan2569@gmail.com" underline="hover" color="inherit">
            chathan2569@gmail.com
          </Link>
        </Box>
        <Box className="resume-header__contact">
          <PhoneIcon fontSize="small" />
          <Typography variant="body2">+91 7997011244</Typography>
        </Box>
        <Box className="resume-header__contact">
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">Bangalore, India</Typography>
        </Box>
        <Box className="resume-header__contact">
          <LinkedInIcon fontSize="small" />
          <Link
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="inherit"
          >
            Linkedin
          </Link>
        </Box>
        <Box className="resume-header__contact">
          <GitHubIcon fontSize="small" />
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="inherit"
          >
            Github
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ResumeHeader;
