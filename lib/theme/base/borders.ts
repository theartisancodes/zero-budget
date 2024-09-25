import colors from './colors';
import pxToRem from '../functions/pxToRem';
import { CustomBorders } from '../../../app/types/MDTypes';

const { grey } = colors;

const borders: CustomBorders = {
  borderColor: grey[300],

  borderWidth: [
    pxToRem(0),
    pxToRem(1),
    pxToRem(2),
    pxToRem(3),
    pxToRem(4),
    pxToRem(5)
  ],

  borderRadius: {
    xs: pxToRem(1.6),
    sm: pxToRem(2),
    md: pxToRem(6),
    lg: pxToRem(8),
    xl: pxToRem(12),
    xxl: pxToRem(16),
    section: pxToRem(160)
  }
};

export default borders;
