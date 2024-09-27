import { forwardRef } from 'react';
import MDInputRoot from './MDInputRoot';
import { TextFieldProps } from '@mui/material/TextField';

interface MDInputProps extends Omit<TextFieldProps, 'variant'> {
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}

const MDInput = forwardRef<HTMLInputElement, MDInputProps>(
  (
    {
      error = false,
      success = false,
      disabled = false,
      size = 'medium',
      ...rest
    },
    ref
  ) => (
    <MDInputRoot
      {...rest}
      ref={ref}
      size={size}
      ownerState={{ error, success, disabled }}
    />
  )
);

export default MDInput;
