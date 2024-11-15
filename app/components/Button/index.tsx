import React, { ButtonHTMLAttributes } from 'react';
import Icon from 'app/components/Icon/Icon';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  state?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  icon?: React.ElementType;
  iconSize?: 'small' | 'medium' | 'large';
  as?: 'button' | 'link';
  width?: string | number;
  className?: string;
  textClassName?: string;
}

const Button = ({
  onClick,
  state = 'primary',
  children,
  icon,
  iconSize = 'large',
  width,
  className,
  textClassName,
  ...props
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
    primary: 'bg-primary text-white hover:bg-primary-dark font-semibold',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    tertiary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    outline:
      'bg-transparent border border-gray-500 text-gray-500 hover:border-primary'
  };

  const classes = `${baseClasses} ${widthClasses} ${stateClasses[state]} ${className}`;
  const spanClasses = clsx('font-pangram', `${textClassName}`);

  return (
    <button onClick={onClick} className={classes} {...props}>
      <div className="flex px-2 py-4 gap-4 items-center">
        {icon && (
          <Icon
            data-testid="muiSvgIcon-root"
            icon={icon}
            muiProps={{
              fontSize: iconSize
            }}
          />
        )}
        <span className={spanClasses}>{children}</span>
      </div>
    </button>
  );
};

export default Button;
