import { MouseEvent, memo } from 'react';

// Styles
import './button.css';

export type ButtonProp = {
  color?: 'btn-primary' | 'btn-secondary' | 'btn-warning';
  type?: 'button' | 'submit' | 'reset';
  children: string;
  size: 'small' | 'large';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button = ({
  color = 'btn-primary',
  children,
  type = 'button',
  size,
  onClick,
  disabled
}: ButtonProp) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`button ${color} ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
