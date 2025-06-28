import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ message = "Chargement en cours..." }) => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
