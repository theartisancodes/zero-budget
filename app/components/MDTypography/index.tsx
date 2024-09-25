import { forwardRef, Ref, ReactNode } from 'react';
import MDTypographyRoot from './MDTypographyRoot';
import { useMaterialUIController } from '../../context';
import { MDTypographyProps } from '../../types/MDTypes';

const MDTypography = forwardRef<HTMLDivElement, MDTypographyProps>(
  (
    {
      color = 'dark',
      fontWeight = false,
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
          color: color as string,
          textTransform: textTransform as
            | 'none'
            | 'uppercase'
            | 'lowercase'
            | 'capitalize',
          verticalAlign: verticalAlign as ,
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
