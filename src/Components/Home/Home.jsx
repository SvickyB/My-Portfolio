// src/components/home/Home.jsx
import { useTypewriter } from '../../hooks/useTypewriter';
import { Button } from '../common/Button';
import profileImage from '../../assets/images/portfolio1st.jpeg'; // Import the image

const Home = () => {
  const typedText = useTypewriter([
    "Hi, I'm Viramakali",
    "aka, Vignesh",
    "I'm a Tech Enthusiast"
  ]);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1Xx5v9fICPbCz_U5SC3YBDefZUgDLM-A8/view?usp=drivesdk', '_blank');
  };

  return (
    <section className="min-h-screen pt-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gray-900">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          {typedText}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hello! I'm a Software Developer from Karaikudi, Tamil Nadu. With expertise in ReactJS, Python, MySQL, PostgreSQL, I aim to become a top developer and entrepreneur.
        </p>
        <Button 
          onClick={handleDownloadResume} 
          aria-label="Resume">
          Resume
        </Button>
      </div>
      <div className="mt-16 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={profileImage}
          alt="Profile of Viramakali, a software developer"
          className="w-80 h-80 rounded-full object-cover shadow-xl"
        />
      </div>
    </section>
  );
};

export default Home;
