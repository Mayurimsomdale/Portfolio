import React, { useState } from 'react'; 
import { X, Mail, Linkedin, Phone } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    about: {
      title: "About",
      isHome: true
    },
    education: {
      title: "Education",
      content: [
        { degree: "B.Tech- Computer Science And Engineering", institution: "SVERI's College Of Engineering, Pandharpur", score: "SGPA: 9.33 (78.44)", year: "2021-Present" },
        { degree: "HSC (Science)", institution: "Shri Sant Damaji Mahavidyalaya Mangalwedha", score: "90.50", year: "2020-2021" },
        { degree: "SSC", institution: "English School Mangalwedha", score: "77.20", year: "2018-2019" }
      ]
    },
    skills: {
      title: "Skills",
      content: [
        { category: "Programming Languages", items: "C, CORE JAVA, HTML/CSS, JavaScript" },
        { category: "Developer Tools", items: "git, Github, VS Code, Linux" },
        { category: "Technical Skills", items: "Data Structure, MySQL, OOP's, DBMS" },
        { category: "Soft Skills", items: "Quick Learner, Teamwork, Work Ethics" }
      ]
    },
    projects: {
      title: "Projects",
      content: [
        {
          title: "Lab Automation by Human Detection using IOT",
          status: "Working",
          duration: "15 Days",
          description: "Implement a smart home automation system using internet-connected devices to automate tasks and processes. Control lighting, heating, and security systems to enhance convenience, energy efficiency, and safety."
        },
        {
          title: "Weather Prediction Website using React",
          description: "Developed a real-time weather forecast website using React, integrating with a weather API to fetch and display weather data. View current weather conditions, UV index, maximum and minimum temperatures, and humidity levels for up to 6 days for specific cities."
        },
        {
          title: "Library Management System using Python",
          description: "Designed and developed a comprehensive Library Management System with a Graphical User Interface for efficiently tracking books, featuring functionalities for issuing and returning books, deleting entries, and viewing the entire book list."
        }
      ]
    },
    achievements: {
      title: "Achievements",
      content: [
        {
          title: "Hackathon Runner-Up",
          description: "Achieved Runner-Up Award in the SSIH Hackathon at SVERI Institute and other Institutes."
        },
        {
          title: "Research Publication",
          description: "Published research paper titled 'IoT-Enabled Human Presence Sensing For Automated Laboratory System' in the IJSRCSEIT (2024)."
        },
        {
          title: "Technical Skills",
          description: "30 WPM typing speed in English."
        },
        {
          title: "Event Participation",
          description: "Participated in various events organized at SVERI Institute."
        }
      ]
    }
  };

  const NavigationButtons = () => (
    <div className="flex justify-end items-center">
      {Object.entries(sections).map(([key, section]) => (
        <button
          key={key}
          onClick={() => setActiveSection(section.isHome ? null : key)}
          className={`px-6 py-3 rounded-md transition-all duration-300 text-base font-medium ${
            (activeSection === key || (section.isHome && activeSection === null))
              ? 'bg-white/10 text-white'
              : 'text-white/90 hover:bg-white/5 hover:text-white'
          }`}
        >
          {section.title}
        </button>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-8">
      {sections.education.content.map((edu, index) => (
        <div key={index} className="border-l-4 border-blue-400 pl-6 py-4 bg-gray-800 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-white/90">{edu.degree}</h3>
          <p className="text-gray-300 mt-2">{edu.institution}</p>
          <p className="text-blue-400 font-medium mt-1">{edu.score}</p>
          <p className="text-gray-400 mt-1">{edu.year}</p>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {sections.skills.content.map((skill, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-white/90 mb-4">{skill.category}</h3>
          <p className="text-gray-300">{skill.items}</p>
        </div>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-8">
      {sections.projects.content.map((project, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-white/90">{project.title}</h3>
          {project.status && (
            <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm mt-2">
              {project.status}
            </span>
          )}
          {project.duration && (
            <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm mt-2 ml-2">
              {project.duration}
            </span>
          )}
          <p className="text-gray-300 mt-4">{project.description}</p>
        </div>
      ))}
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      {sections.achievements.content.map((achievement, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-white/90">{achievement.title}</h3>
          <p className="text-gray-300 mt-3">{achievement.description}</p>
        </div>
      ))}
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'education':
        return renderEducation();
      case 'skills':
        return renderSkills();
      case 'projects':
        return renderProjects();
      case 'achievements':
        return renderAchievements();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="fixed w-full bg-gray-800/50 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <span className="text-2xl font-bold text-white/90 hover:text-white transition-colors duration-300">
              Mayuri Somdale
            </span>
            <NavigationButtons />
          </div>
        </div>
      </header>

      {activeSection ? (
        <div className="fixed inset-0 bg-gray-900 z-40 overflow-y-auto pt-20">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white/90">{sections[activeSection].title}</h2>
              <button 
                onClick={() => setActiveSection(null)}
                className="p-2 rounded-full hover:bg-gray-800 text-white/80 hover:text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-gray-300">
              {renderSection()}
            </div>
          </div>
        </div>
      ) : (
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl font-bold text-white/90 text-center md:text-left">
              Mayuri Somdale
            </h1>
            <p className="text-xl text-gray-300 text-center md:text-left">
              Computer Science Engineer
            </p>
            <div className="flex flex-col md:flex-row gap-6 text-base">
              <a href="mailto:mayurimsomdale@coep.sveri.ac.in" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
                mayurimsomdale@coep.sveri.ac.in
              </a>
              <a href="tel:+919665000150" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
                +91(966) 500-0150
              </a>
              <a href="https://www.linkedin.com/in/mayuri-somdale-bb712324a" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Portfolio;
