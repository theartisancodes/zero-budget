import { forwardRef } from 'react';
import MDButtonRoot from './MDButtonRoot';
import { useMaterialUIController } from '../../context';
import { MDButtonProps } from './types';

const MDButton = forwardRef<HTMLButtonElement, MDButtonProps>(
  (
    {
      color = 'white',
      variant = 'contained',
      size = 'medium',
      circular = false,
      iconOnly = false,
      children,
      ...rest
    },
    ref
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === 'gradient' ? 'contained' : variant}
        size={size}
        ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
      >
        {children}
      </MDButtonRoot>
    );
  }
);

export default MDButton;
