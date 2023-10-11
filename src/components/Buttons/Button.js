import React from "react";
import "./Button.css";

const Button = ({ children, icon, mode, size, onClick }) => {
  const buttonClasses = `custom-button ${mode} ${size}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;
