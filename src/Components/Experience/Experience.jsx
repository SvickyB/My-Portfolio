import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import drobo from "../../assets/drobo.jpg";
import pearl from "../../assets/pearl.jpg";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={drobo} alt="Drobo logo" className="w-12 h-12" />
            <span className="text-white">
              <h2 className="leading-tight">Intern, Software Engineer, DrobospaceX Automation Pvt. Ltd.</h2>
              <p className="text-sm leading-tight font-thin">Feb 2024 - Mar 2024</p>
              <ul className="text-sm p-2">
                <li>- Worked as a Software Developer Intern</li>
                <li>- Python Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={pearl} alt="Drobo logo" className="w-12 h-12" />
            <span className="text-white">
              <h2 className="leading-tight">Intern, Software Developer, Pearl Thoughts</h2>
              <p className="text-sm leading-tight font-thin">Sept 2024 - Present</p>
              <ul className="text-sm p-2">
                <li>- Work Intern as a Software Developer</li>
                <li>- Jr. Software Developer (NestJS, PostgreSQL)</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
