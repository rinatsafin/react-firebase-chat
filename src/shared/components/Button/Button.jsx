import { useState } from 'react';

const Button = ({ onClick, children, className, type = 'button', disabled, ...props }) => {
  const [pressed, setPressed] = useState(false);
  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault(); // Prevents triggering an additional click event
    }
  };

  const handleKeyUp = (e) => {
    if (onClick && (e.key === ' ' || e.key === 'Enter')) {
      setPressed(!pressed);
      onClick(e);
    }
  };

  const handlePointerDown = (e) => {
    e.preventDefault(); // Prevents triggering an additional click event
  };

  const handlePointerUp = (e) => {
    if (onClick && e.target === e.currentTarget) {
      setPressed(!pressed);
      onClick(e);
    }
  };

  return (
    <button
      {...props}
      disabled={disabled}
      type={type}
      className={className}
      aria-pressed={pressed}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;