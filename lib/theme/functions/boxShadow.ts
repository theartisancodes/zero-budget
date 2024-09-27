import rgba from './rgba';
import pxToRem from './pxToRem';
import { COLORS } from '../../../app/types/MDTypes';

function boxShadow(
  offset = [],
  radius = [],
  color: COLORS,
  opacity: string | number,
  inset = ''
) {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
    spread
  )} ${rgba(color, opacity)}`;
}

export default boxShadow;
