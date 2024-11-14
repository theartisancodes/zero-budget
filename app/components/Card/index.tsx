import React, { CSSProperties } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}
const Card = ({ children, className, style }: CardProps) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Card;
