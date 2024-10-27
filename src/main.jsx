// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/variables.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: src/components/common/Icon.jsx
// If you want to create a reusable icon component
export const Icon = ({ icon: IconComponent, size = 24, color, className = "" }) => (
  <IconComponent
    size={size}
    color={color}
    className={`transition-colors duration-300 ${className}`}
  />
);