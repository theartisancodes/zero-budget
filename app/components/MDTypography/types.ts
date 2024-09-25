import { CustomThemeColors } from '../../types/MDTypes';
import { TypographyProps } from '@mui/material/Typography';

export interface TypographyOwnerState extends Omit<TypographyProps, 'color'> {
  color?:
    | keyof CustomThemeColors['gradients']
    | keyof CustomThemeColors
    | keyof CustomThemeColors['text']
    | keyof CustomThemeColors['white']
    | keyof CustomThemeColors['black']
    | keyof CustomThemeColors['grey']
    | keyof CustomThemeColors['dark']
    | 'inherit'
    | string;

  darkMode?: boolean;

  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  verticalAlign?:
    | 'unset'
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
    | 'top'
    | 'bottom';
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold' | string;
  opacity?: number;
  textGradient?: boolean;
}
