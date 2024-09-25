import React, { forwardRef, Ref } from 'react';
import MDTypographyRoot from './MDTypographyRoot';
import { useMaterialUIController } from '../../context';
import { TypographyOwnerState } from './types';

interface MDTypographyProps extends TypographyOwnerState {
  children: React.ReactNode;
}

const MDTypography = forwardRef<HTMLDivElement, MDTypographyProps>(
  (
    {
      color = 'dark',
      fontWeight = '',
      textTransform = 'none',
      verticalAlign = 'unset',
      textGradient = false,
      opacity = 1,
      children,
      ...rest
    },
    ref
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDTypographyRoot
        {...rest}
        ref={ref as Ref<HTMLDivElement>}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode
        }}
      >
        {children}
      </MDTypographyRoot>
    );
  }
);

export default MDTypography;
