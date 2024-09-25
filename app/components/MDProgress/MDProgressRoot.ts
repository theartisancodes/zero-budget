import { styled, Theme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { OwnerState } from '../../types/MDTypes';

export default styled(LinearProgress)<{ ownerState: OwnerState }>(
  ({ theme, ownerState }) => {
    const { palette, functions } = theme as Theme;
    const { color, value, variant } = ownerState;
    const { customColors } = palette;

    const { text, gradients, info } = customColors;
    const { linearGradient } = functions;
    let backgroundValue: string;

    if (variant === 'gradient') {
      backgroundValue = gradients[color]
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.info.main, gradients.info.state);
    } else {
      backgroundValue = palette[color] ? palette[color].main : info.main;
    }

    return {
      '& .MuiLinearProgress-bar': {
        background: backgroundValue,
        width: `${value}%`,
        color: text.main
      }
    };
  }
);
