import { styled, Theme } from '@mui/material/styles';

export default styled('span')(({ theme }) => {
  const { palette, typography, functions } = theme as Theme;

  const { white } = palette.customColors;
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
