import TextField from '@mui/material/TextField';
import { styled, Theme } from '@mui/material/styles';
import { backgroundURLError, backgroundURLSuccess } from './constants';
import { CustomFunctions } from '../../types/MDTypes';

interface OwnerStateProps {
  error: boolean;
  success: boolean;
  disabled: boolean;
}

export default styled(TextField)<{ ownerState: OwnerStateProps }>(
  ({ theme, ownerState }) => {
    const { palette, functions } = theme as Theme & {
      functions: CustomFunctions;
    };
    const { error, success, disabled } = ownerState;

    const {
      grey,
      transparent,
      error: colorError,
      success: colorSuccess
    } = palette;
    const { pxToRem } = functions;

    const errorStyles = () => ({
      backgroundImage: backgroundURLError,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `right ${pxToRem(12)} center`,
      backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline, &:after': {
          borderColor: colorError.main
        }
      },

      '& .MuiInputLabel-root.Mui-focused': {
        color: colorError.main
      }
    });

    const successStyles = () => ({
      backgroundImage: backgroundURLSuccess,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `right ${pxToRem(12)} center`,
      backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline, &:after': {
          borderColor: colorSuccess.main
        }
      },

      '& .MuiInputLabel-root.Mui-focused': {
        color: colorSuccess.main
      }
    });

    return {
      backgroundColor: disabled ? `${grey[200]} !important` : transparent.main,
      pointerEvents: disabled ? 'none' : 'auto',
      ...(error && errorStyles()),
      ...(success && successStyles())
    };
  }
);
