import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  state?: 'primary' | 'secondary' | 'tertiary' | 'outline';
}

const Button = ({ onClick, state = 'primary', text }: ButtonProps) => {
  const baseClasses =
    'px-4 py-2 font-semibold rounded transition ease-in-out duration-300 focus:outline-none';

  const stateClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    tertiary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    outline:
      'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white'
  };

  const classes = `${baseClasses} ${stateClasses[state]}`;

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
};

export default Button;
