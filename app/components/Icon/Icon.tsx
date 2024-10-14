import React from 'react';
import { SvgIconProps } from '@mui/material';

interface IconProps {
  size?: number | string;
  icon: React.ElementType;
  className?: string;
  muiProps?: SvgIconProps;
}

const Icon = ({
  size = 6,
  icon: IconComponent,
  className = '',
  muiProps = {}
}: IconProps) => {
  const sizeClasses =
    typeof size === 'string'
      ? `w-${size} h-${size}`
      : `w-[${size}px] h-[${size}px]`;

  const isMUISize = ['small', 'medium', 'large'].includes(size as string);
  const muiSizeProps = isMUISize ? { fontSize: size as unknown } : {};

  return (
    <IconComponent
      className={`${sizeClasses} ${className}`}
      {...muiProps}
      {...muiSizeProps}
    />
  );
};

export default Icon;
