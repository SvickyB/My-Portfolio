// src/components/common/SectionTitle.jsx
export const SectionTitle = ({ children, className = "" }) => (
    <h2 className={`text-3xl md:text-5xl font-bold text-white mb-8 ${className}`}>
      {children}
    </h2>
  );
  export default SectionTitle;