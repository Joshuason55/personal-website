import React from 'react';
import './Button.css';

function Button({ onClick, label }) {
  return (
    <button className="button-28" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
