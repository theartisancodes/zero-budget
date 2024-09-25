import Icon from '@mui/material/Icon';
import { styled, Theme } from '@mui/material/styles';
import { COLORS } from '../../types/MDTypes';

interface IconProps {
  color: COLORS;
  bgWhite?: boolean;
}

export default styled(Icon)<{ ownerState: IconProps }>(
  ({ theme, ownerState }) => {
    const { palette, functions, typography } = theme as Theme;
    const { color, bgWhite } = ownerState;
    const { customColors } = palette;
    const { white, transparent, gradients } = customColors;
    const { pxToRem, linearGradient } = functions;
    const { size } = typography;

    let backgroundImageValue: string;

    if (bgWhite) {
      backgroundImageValue = gradients[color]
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.info.main, gradients.info.state);
    } else if (color === 'light') {
      backgroundImageValue = linearGradient(
        gradients.dark.main,
        gradients.dark.state
      );
    }

    return {
      backgroundImage: backgroundImageValue,
      WebkitTextFillColor:
        bgWhite || color === 'light' ? transparent.main : white.main,
      WebkitBackgroundClip: 'text',
      marginRight: pxToRem(8),
      fontSize: size.lg,
      transform: `translateY(${pxToRem(-2)})`
    };
  }
);
