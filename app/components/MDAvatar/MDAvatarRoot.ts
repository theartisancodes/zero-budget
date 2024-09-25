import Avatar from '@mui/material/Avatar';
import { styled, Theme } from '@mui/material/styles';
import {
  CustomThemeColors,
  CustomBoxShadows,
  CustomFunctions
} from '../../types/MDTypes';

interface OwnerState {
  shadow: keyof CustomBoxShadows | 'none';
  bgColor: keyof CustomThemeColors['gradients'] | 'transparent';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export default styled(Avatar)<{ ownerState: OwnerState }>(
  ({ theme, ownerState }) => {
    const { palette, functions, typography, boxShadows } = theme as Theme & {
      palette: { customColors: CustomThemeColors };
      functions: CustomFunctions;
      boxShadows: CustomBoxShadows;
    };
    const { shadow, bgColor, size } = ownerState;

    const { gradients, transparent, white } = palette.customColors;
    const { pxToRem, linearGradient } = functions;
    const { size: fontSize, fontWeightRegular } = typography;

    // backgroundImage value
    const backgroundValue =
      bgColor === 'transparent'
        ? transparent.main
        : linearGradient(gradients[bgColor].main, gradients[bgColor].state);

    // size value
    let sizeValue;

    switch (size) {
      case 'xs':
        sizeValue = {
          width: pxToRem(24),
          height: pxToRem(24),
          fontSize: fontSize.xs
        };
        break;
      case 'sm':
        sizeValue = {
          width: pxToRem(36),
          height: pxToRem(36),
          fontSize: fontSize.sm
        };
        break;
      case 'lg':
        sizeValue = {
          width: pxToRem(58),
          height: pxToRem(58),
          fontSize: fontSize.sm
        };
        break;
      case 'xl':
        sizeValue = {
          width: pxToRem(74),
          height: pxToRem(74),
          fontSize: fontSize.md
        };
        break;
      case 'xxl':
        sizeValue = {
          width: pxToRem(110),
          height: pxToRem(110),
          fontSize: fontSize.md
        };
        break;
      default:
        sizeValue = {
          width: pxToRem(48),
          height: pxToRem(48),
          fontSize: fontSize.md
        };
    }

    return {
      background: backgroundValue,
      color: white.main,
      fontWeight: fontWeightRegular,
      boxShadow: boxShadows[shadow],
      ...sizeValue
    };
  }
);
