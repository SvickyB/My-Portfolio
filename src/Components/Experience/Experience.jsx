// src/components/experience/Experience.jsx
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { SectionTitle } from '../common/SectionTitle';
import { FaJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango, SiMysql, SiPostgresql, SiFigma } from "react-icons/si";
import droboLogo from '../../assets/images/drobo.jpg'; // Import the image
import pearlLogo from '../../assets/images/pearl.jpg'; // Import the image

const Experience = () => {
  const skills = [
    { 
      Icon: FaPython, 
      color: "#3776AB",
      name: "Python"
    },
    { 
      Icon: SiDjango, 
      color: "#092E20",
      name: "Django"
    },
    { 
      Icon: SiMysql, 
      color: "#4479A1",
      name: "MySQL"
    },
    { 
      Icon: SiPostgresql, 
      color: "#336791",
      name: "PostgreSQL"
    },
    { 
      Icon: FaJs, 
      color: "#F7DF1E",
      name: "JavaScript"
    },
    { 
      Icon: FaDatabase, 
      color: "#FF4B4B",
      name: "UI Design"
    },
  ];
  

  const experiences = [
    {
      logo: droboLogo, // Use the imported image
      company: "DrobospaceX Automation Pvt. Ltd.",
      position: "Software Engineer Intern",
      duration: "Feb 2024 - Mar 2024",
      responsibilities: [
        "Worked as a Software Developer Intern",
        "Python Developer"
      ]
    },
    {
      logo: pearlLogo, // Use the imported image
      company: "Pearl Thoughts",
      position: "Software Developer Intern",
      duration: "Sept 2024 - Oct 2024",
      responsibilities: [
        "Worked as a Software Developer Intern",
        "Jr. Software Developer (NestJS, PostgreSQL)"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-[#171d32]">
      <SectionTitle>Experience</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
          <div className="grid grid-cols-2 gap-10">
            {skills.map(({ Icon, color }, index) => (
              <div
                key={index}
                className="bg-[#1a1f38] p-4 rounded-xl flex items-center justify-center
                hover:transform hover:scale-105 transition-all duration-300"
              >
                <Icon size={40} color={color} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-6">Work History</h3>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
