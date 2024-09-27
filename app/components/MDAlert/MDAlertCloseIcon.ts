import { styled, Theme } from '@mui/material/styles';
import {
  CustomFunctions,
  CustomThemeColors,
  ExtendedTypographyOptions
} from '../../types/MDTypes';

export default styled('span')(({ theme }: { theme: Theme }) => {
  const extendedTheme = theme as Theme & {
    palette: CustomThemeColors;
    typography: ExtendedTypographyOptions;
    functions: CustomFunctions;
  };

  const { palette, typography, functions } = extendedTheme;
  const { white } = palette;
  const { size, fontWeightMedium } = typography;
  const { pxToRem } = functions;

  return {
    color: white.main,
    fontSize: size.xl,
    padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
    marginLeft: pxToRem(40),
    fontWeight: fontWeightMedium,
    cursor: 'pointer',
    lineHeight: 0
  };
});
