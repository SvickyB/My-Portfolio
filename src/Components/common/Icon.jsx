// src/components/common/Icon.jsx
import React from 'react';

const Icon = ({ 
  icon: IconComponent, 
  size = 24, 
  color = "currentColor", 
  className = "", 
  ...props 
}) => {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <IconComponent 
        size={size} 
        color={color} 
        {...props} 
        className="transition-colors duration-300"
      />
    </span>
  );
};

export default Icon;