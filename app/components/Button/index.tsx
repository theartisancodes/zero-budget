import React, { ButtonHTMLAttributes } from 'react';
import Icon from 'app/components/Icon/Icon';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  state?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  icon?: React.ElementType;
  as?: 'button' | 'link';
  width?: string | number;
  className?: string;
}

const Button = ({
  onClick,
  state = 'primary',
  children,
  icon,
  width,
  className
}: ButtonProps) => {
  const baseClasses = clsx(
    'flex gap-4 p-4 font-normal rounded-xl',
    'items-center transition ease-in-out',
    'duration-300 focus:outline-none h-18'
  );

  const widthClasses =
    typeof width === 'string'
      ? `w-${width}`
      : typeof width === 'number'
      ? `w-[${width}px]`
      : 'w-full';

  const stateClasses = {
    primary: 'bg-primary-gradient text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    tertiary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    outline: 'bg-transparent hover:bg-gray-500 hover:text-white text-white'
  };

  const classes = `${baseClasses} ${widthClasses} ${stateClasses[state]} ${className}`;

  return (
    <button onClick={onClick} className={classes}>
      {icon && (
        <Icon
          icon={icon}
          muiProps={{
            fontSize: 'large'
          }}
        />
      )}
      <span className="font-pangram text-2xl">{children}</span>
    </button>
  );
};

export default Button;
