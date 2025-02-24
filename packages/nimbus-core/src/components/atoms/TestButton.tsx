import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {label}
    </button>
  );
};

export default Button;
