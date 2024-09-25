import Typography from '@mui/material/Typography';
import { styled, Theme } from '@mui/material/styles';
import { CSSObject } from '@mui/system';
import { TypographyOwnerState } from './types';

export default styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'ownerState'
})<{ ownerState: TypographyOwnerState }>(({ theme, ownerState }): CSSObject => {
  const { palette, typography, functions } = theme as Theme;
  const {
    color,
    textTransform,
    verticalAlign,
    fontWeight,
    opacity,
    textGradient,
    darkMode
  } = ownerState;

  const { customColors } = palette;
  const { gradients, transparent, white } = customColors;
  const {
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  } = typography;
  const { linearGradient } = functions;

  const fontWeights = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold
  };

  const gradientStyles = (): CSSObject => ({
    backgroundImage:
      color !== 'inherit' &&
      color !== 'text' &&
      color !== 'white' &&
      gradients[color]
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.dark.main, gradients.dark.state),
    display: 'inline-block',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: transparent.main,
    position: 'relative',
    zIndex: 1
  });

  let colorValue =
    color === 'inherit' || !palette[color] ? 'inherit' : palette[color].main;

  if (darkMode && (color === 'inherit' || !palette[color])) {
    colorValue = 'inherit';
  } else if (darkMode && color === 'dark') {
    colorValue = white.main;
  }

  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: 'none',
    color: colorValue,
    fontWeight: fontWeights[fontWeight] || fontWeightRegular,
    ...(textGradient && gradientStyles())
  };
});
