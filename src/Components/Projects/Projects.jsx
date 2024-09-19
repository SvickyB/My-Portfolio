import React from "react";
import ProjectCard from "./ProjectCard";
import virtualAssistantImg from "../../assets/virtualAssistantImg.webp"; // Add correct paths
import ecommerceImg from "../../assets/ecommerceImg.jpg";
import mailSenderImg from "../../assets/mailSenderImg.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProjectCard
          title="Virtual Assistant"
          main="A virtual assistant (VA) is a software agent that can perform a range of tasks or services for a user based on user input such as sending mail, tracing mobile number, commands or questions, including verbal ones."
          sourceCodeUrl="https://github.com/SvickyB/Virtual-Assistant"
          bannerImg={virtualAssistantImg}
        />
        <ProjectCard
          title="E-Commerce Django"
          main="Developed a dynamic e-commerce website using Django with MySQL as the database backend."
          sourceCodeUrl="https://github.com/SvickyB/django-ecommerce-master"
          bannerImg={ecommerceImg}
        />
        <ProjectCard
          title="Resilient Mail Sender"
          main="Developed a resilient mail sender application in JavaScript, featuring automatic retries."
          sourceCodeUrl="https://github.com/SvickyB/Resilent_Mail_Sender"
          bannerImg={mailSenderImg}
        />
      </div>
    </div>
  );
};

export default Projects;
