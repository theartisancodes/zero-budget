import React, { forwardRef } from 'react';
import MDAvatarRoot from './MDAvatarRoot';
import { CustomThemeColors, CustomBoxShadows } from '../../types/MDTypes';

interface MDAvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  bgColor?: keyof CustomThemeColors['gradients'] | 'transparent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  shadow?: keyof CustomBoxShadows | 'none';
}

const MDAvatar = forwardRef<HTMLDivElement, MDAvatarProps>(
  ({ bgColor = 'transparent', size = 'md', shadow = 'none', ...rest }, ref) => (
    <MDAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
  )
);

export default MDAvatar;
