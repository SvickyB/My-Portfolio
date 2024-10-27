// src/components/projects/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { SectionTitle } from '../common/SectionTitle';
import ecommerceImg from '../../assets/images/ecommerceImg.jpg'; 
import virtualAssistantImg from '../../assets/images/virtualAssistantImg.webp';
import mailSenderImg from '../../assets/images/mailSenderImg.png';
import ruleEngineWithAST from '../../assets/images/ruleEngineWithAST.jpeg';
import realTimeWeatherApplication from '../../assets/images/realTimeWeatherApplication.jpeg';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      image: ecommerceImg, 
      technologies: [  "MySQL", "Python","Django"],
      githubLink: "https://github.com/SvickyB/django-ecommerce-master"
    },
    {
      title: "Virtual Assistant",
      description: "A virtual assistant (VA) is a software agent that can perform a range of tasks or services for a user based on user input such as sending mail, tracing mobile number, commands or questions, including verbal ones.",
      image: virtualAssistantImg, 
      technologies: [  "Python", "APIs", "Web Development"],
      githubLink: "https://github.com/SvickyB/Virtual-Assistant"
    },
    {
      title: "Resilient Mail Sender",
      description: "Developed a resilient mail sender application in JavaScript, featuring automatic retries.",
      image: mailSenderImg, 
      technologies: [  "Javascript", "Nodemailer"],
      githubLink: "https://github.com/SvickyB/Resilent_Mail_Sender"
    },
    {
      title: "Rule Engine with AST",
      description: "The Rule Engine with AST is a comprehensive application that enables users to manage and evaluate rules using Abstract Syntax Tree concepts. The system provides a flexible and intuitive interface for rule management and evaluation.",
      image: ruleEngineWithAST, 
      technologies: [  "Javascript", "Tailwind CSS", "Nodemailer", "Web Development"],
      githubLink: "https://github.com/SvickyB/Rule-Engine-AST"
    },
    {
      title: "Real-Time Weather Monitoring System",
      description: "A real-time weather monitoring system that tracks and analyzes weather data for six major cities, featuring automated data collection, analysis, and alert systems. An user can also search for cities and can add alert if triggered it will send an alert mail to the mail id provided while creating alert.",
      image: realTimeWeatherApplication, 
      technologies: [  "Javascript", "Nodemailer", "React", "Tailwind CSS"],
      githubLink: "https://github.com/SvickyB/Real-Time_Weather_Application"
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
