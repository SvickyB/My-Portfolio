import React from "react";
import avatarImg from "../../assets/portfolio1st.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1><br></br>
        <p className="text-sm md:text-1.5xl tracking-tight ">
        Hello! I'm Viramakali, aka Vignesh, a Software Developer from Karaikudi, Tamil Nadu. 
        With expertise in ReactJS, Python, MySQL, PostgreSQL, and NestJS, I aim to become a top developer 
        and entrepreneur. I believe in hard and smart work, striving to create impactful projects. 
        In my free time, I enjoy writing poems and listening to music for inspiration. Let’s connect!


        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Scroll Down
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt=""  style={{ height: '500px', width: '500px' }} />
      </div>
    </div>
  );
};

export default Home;
