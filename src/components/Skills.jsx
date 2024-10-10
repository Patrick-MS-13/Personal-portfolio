import React, { useState } from 'react';
import '../style/skill.css'; // Ensure this CSS file exists
import BootstrapLogo from '../img/icons8-bootstrap-logo.svg';
import JavaScriptLogo from '../img/icons8-javascript.svg';
import HTMLLogo from '../img/icons8-html-logo.svg';
import CSSLogo from '../img/icons8-css-logo.svg';
import ReactLogo from '../img/icons8-react.svg';

const skills = [
  { id: 1, title: 'HTML', description: 'Proficient in HTML5, building responsive layouts.', icon: HTMLLogo },
  { id: 2, title: 'CSS', description: 'Expert in CSS3, focusing on modern design techniques.', icon: CSSLogo },
  { id: 3, title: 'JavaScript', description: 'Skilled in JavaScript, building dynamic web applications.', icon: JavaScriptLogo },
  { id: 4, title: 'React', description: 'Experienced in React for building modern web applications.', icon: ReactLogo },
  { id: 5, title: 'Bootstrap', description: 'Proficient in using Bootstrap for responsive design.', icon: BootstrapLogo },
];

const SkillCard = ({ skill, isDarkMode, toggleDescription, expandedSkill }) => {
  return (
    <div className={`col-md-4 mb-4`}>
      <div className={`skill-card ${isDarkMode ? 'dark-mode' : 'bg-light text-dark'}`}>
        <div className="skill-icon">
          <img 
            src={skill.icon} 
            alt={`${skill.title} icon`} 
            className="img-fluid rounded-custom" 
            width="68" 
            height="68" 
          />
        </div>
        <h3 className="skill-title">{skill.title}</h3>
        <p className={`skill-description ${isDarkMode ? 'text-light' : 'text-dark'}`}>
          {expandedSkill === skill.id ? skill.description : skill.description.slice(0, 100)} {/* Adjust slice limit */}
          {expandedSkill !== skill.id && skill.description.length > 100 && (
            <span onClick={() => toggleDescription(skill.id)} style={{ cursor: 'pointer', color: isDarkMode ? '#007bff' : '#007bff' }}>... See More</span>
          )}
        </p>
      </div>
    </div>
  );
};

const Skill = ({ isDarkMode }) => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleDescription = (id) => {
    setExpandedSkill(expandedSkill === id ? null : id);
  };

  return (
    <section className={`skills-section ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">
        <h2 id="skills" className={`${isDarkMode ? "text-light" : "text-dark"} text-center`}>Skills</h2>
        <div className="row">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} isDarkMode={isDarkMode} toggleDescription={toggleDescription} expandedSkill={expandedSkill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
