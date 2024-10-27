// src/components/about/About.jsx
import { SectionTitle } from '../common/SectionTitle';
import { IoArrowForward } from "react-icons/io5";
import portfolio2nd from '../../assets/images/portfolio2nd.jpeg';

const AboutCard = ({ title, description }) => (
  <div className="flex gap-4 p-4 hover:bg-[#1a1f38] rounded-xl transition-all duration-300">
    <IoArrowForward size={24} className="text-[#465697] mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const About = () => {
  const skills = [
    {
      title: "Frontend Developer",
      description: "I am proficient in React.js and JavaScript, enabling me to create dynamic and responsive user interfaces. My experience with component-based architecture allows for seamless updates and a highly interactive user experience."
    },
    {
      title: "Database Developer",
      description: "Skilled in managing various databases, including MySQL and PostgreSQL for structured data storage, and MongoDB for handling unstructured data. This diverse skill set allows me to implement flexible and efficient data storage solutions."
    },
    {
      title: "Backend Developer",
      description: "Strong background in JavaScript and Python, utilizing NestJS to develop robust APIs and efficient server-side logic. This experience ensures that applications are scalable and maintainable, allowing for easy integration of new features."
    }
  ];

  return (
    <section id="about" className="section-padding bg-[#1a1f38]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src={portfolio2nd}
              alt="About me"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171d32] to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <AboutCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;