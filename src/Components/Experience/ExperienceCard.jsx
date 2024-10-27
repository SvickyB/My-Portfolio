// // src/components/experience/ExperienceCard.jsx
const ExperienceCard = ({ logo, company, position, duration, responsibilities }) => (
  <div className="bg-[#1a1f38] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
    <div className="flex items-start space-x-4">
      <img src={logo} alt={company} className="w-16 h-16 rounded-lg object-cover" />
      <div>
        <h3 className="text-xl font-semibold text-white">{position}</h3>
        <p className="text-[#465697] font-medium">{company}</p>
        <p className="text-gray-400 text-sm">{duration}</p>
        <ul className="mt-3 space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-gray-300 text-sm flex items-start">
              <span className="mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
export default ExperienceCard;