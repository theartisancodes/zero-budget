import { COLORS, Sizes } from '../../types/MDTypes';
import { ReactNode, ElementType } from 'react';

export interface MDButtonProps {
  component?: ElementType;
  color: COLORS | string;
  variant: 'text' | 'contained' | 'outlined' | 'gradient';
  circular: boolean;
  iconOnly: boolean;
  children?: ReactNode;
  size?: Sizes;
  darkMode?: boolean;
}
