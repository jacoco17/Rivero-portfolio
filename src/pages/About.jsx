import profileImage from "../assets/about.jpg";
import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiHtml5, SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";
import "./About.css"; 

const About = () => {
  const skills = [
    { icon: <FaReact />, name: "React.js" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <div className="about-container">
      
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">About Me</h1>
          <p>
            I'm John Francis A. Rivero, a 22-year-old IT student from Zamboanga
            City. Passionate about web development and IT maintenance.
          </p>
          <p>
            <strong>Age:</strong> 22
          </p>
          <p>
            <strong>Experience:</strong> Aspiring Developer
          </p>
          <p>
            <strong>Availability:</strong> Open for Projects
          </p>
          <p>
            <strong>Skills:</strong> See below
          </p>

          
          <div className="skills">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill"
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      
        <div className="about-image">
          <img src={profileImage} alt="John Francis A. Rivero" />
        </div>
      </div>
    </div>
  );
};

export default About;
