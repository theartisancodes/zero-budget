import { forwardRef, HTMLAttributes } from 'react';
import MDTypography from '../MDTypography';
import MDProgressRoot from './MDProgressRoot';
import { COLORS } from '../../types/MDTypes';

interface MDProgressProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'contained' | 'gradient';
  color?: COLORS;
  value?: number;
  label?: boolean;
}

const MDProgress = forwardRef<HTMLDivElement, MDProgressProps>(
  (
    {
      variant = 'contained',
      color = 'info',
      value = 0,
      label = false,
      ...rest
    },
    ref
  ) => (
    <>
      {label && (
        <MDTypography variant="button" fontWeight="medium" color="text">
          {value}%
        </MDTypography>
      )}
      <MDProgressRoot
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  )
);

export default MDProgress;
