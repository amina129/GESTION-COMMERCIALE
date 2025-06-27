import React from 'react';
import './Notification.css';

const Notification = ({ message, type = "success", onClose }) => {
  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      {message}
      <button onClick={onClose}>x</button>
    </div>
  );
};

export default Notification;
