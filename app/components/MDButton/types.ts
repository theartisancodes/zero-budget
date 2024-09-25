import { COLORS, Sizes } from '../../types/MDTypes';
import { ReactNode } from 'react';

export interface MDButtonProps {
  color: COLORS;
  variant: 'text' | 'contained' | 'outlined' | 'gradient';
  circular: boolean;
  iconOnly: boolean;
  children?: ReactNode;
  size: Sizes;
  darkMode?: boolean;
}
