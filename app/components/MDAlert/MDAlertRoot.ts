import Box from '@mui/material/Box';
import { styled, Theme } from '@mui/material/styles';
import { OwnerState } from '../../types/MDTypes';

export default styled(Box)<{ ownerState: OwnerState }>(
  ({ theme, ownerState }) => {
    const { palette, typography, borders, functions } = theme as Theme;
    const { color } = ownerState;

    const { white, gradients } = palette;
    const { fontWeightMedium, fontSizeRegular } = typography;
    const { borderRadius } = borders;
    const { pxToRem, linearGradient } = functions;

    const backgroundImageValue = gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.info.main, gradients.info.state);

    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: pxToRem(60),
      backgroundImage: backgroundImageValue,
      color: white.main,
      position: 'relative',
      padding: pxToRem(16),
      marginBottom: pxToRem(16),
      borderRadius: borderRadius.md,
      fontSize: fontSizeRegular,
      fontWeight: fontWeightMedium
    };
  }
);
