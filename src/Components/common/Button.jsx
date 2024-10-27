// src/components/common/Button.jsx
export const Button = ({ children, className = "", ...props }) => (
    <button
      className={`px-6 py-3 bg-[#465697] text-white rounded-full font-semibold 
      hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  export default Button;