import React, { forwardRef } from 'react';
import MDBoxRoot from './MDBoxRoot';
import { MDBoxProps } from '../../types/MDTypes';

const MDBox = forwardRef<HTMLDivElement, MDBoxProps>(
  (
    {
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow,
      coloredShadow,
      ...rest
    },
    ref
  ) => (
    <MDBoxRoot
      {...rest}
      ref={ref}
      ownerState={{
        variant,
        bgColor,
        color,
        opacity,
        borderRadius,
        shadow,
        coloredShadow
      }}
    />
  )
);

export default MDBox;
