import { ReactNode, forwardRef } from 'react';
import MDBadgeRoot from './MDBadgeRoot';
import { COLORS } from '../../types/MDTypes';

interface MDBadgeProps {
  color?: COLORS;
  variant?: 'gradient' | 'contained';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  circular?: boolean;
  indicator?: boolean;
  border?: boolean;
  container?: boolean;
  children?: ReactNode;

  [key: string]: any;
}

const MDBadge = forwardRef<HTMLDivElement, MDBadgeProps>(
  (
    {
      color = 'info',
      variant = 'gradient',
      size = 'sm',
      circular = false,
      indicator = false,
      border = false,
      container = false,
      children = false,
      ...rest
    },
    ref
  ) => (
    <MDBadgeRoot
      {...rest}
      ownerState={{
        color,
        variant,
        size,
        circular,
        indicator,
        border,
        container,
        children
      }}
      ref={ref}
      color="default"
    >
      {children}
    </MDBadgeRoot>
  )
);

export default MDBadge;
