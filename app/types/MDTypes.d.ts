import { TypographyOptions } from '@mui/material/styles/createTypography';
import React, { ReactNode } from 'react';
import { BoxProps } from '@mui/material/Box';

export interface CustomThemeColors {
  background: {
    default: string;
  };
  text: {
    main: string;
    focus?: string;
    primary?: string;
    secondary?: string;
    disabled?: string;
  };
  transparent: {
    main: string;
  };
  white: {
    main: string;
    focus: string;
  };
  black: {
    light: string;
    main: string;
    focus: string;
  };
  primary: {
    main: string;
    focus: string;
  };
  secondary: {
    main: string;
    focus: string;
  };
  info: {
    main: string;
    focus: string;
  };
  success: {
    main: string;
    focus: string;
  };
  warning: {
    main: string;
    focus: string;
  };
  error: {
    main: string;
    focus: string;
  };
  light: {
    main: string;
    focus: string;
  };
  dark: {
    main: string;
    focus: string;
  };
  grey: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  gradients: {
    [key: string]: {
      main: string;
      state: string;
    };
  };
  socialMediaColors: {
    [key: string]: {
      main: string;
      dark: string;
    };
  };
  badgeColors: {
    [key: string]: {
      background: string;
      text: string;
    };
  };
  coloredShadows: {
    [key: string]: string;
  };
  inputBorderColor: string;
  tabs: {
    indicator: {
      boxShadow: string;
    };
  };
}

export interface TypographyTypes {
  fontSize: string;
  fontFamily: string;
  color: string;
  fontWeight: number;
  lineHeight: number;
}

export interface ExtendedTypographyOptions extends TypographyOptions {
  fontWeightLighter?: number;
  fontSizeRegular: string;
  d1: TypographyTypes;
  d2: TypographyTypes;
  d3: TypographyTypes;
  d4: TypographyTypes;
  d5: TypographyTypes;
  d6: TypographyTypes;
  size: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  lineHeight: {
    sm: number;
    md: number;
    lg: number;
  };
}

export interface CustomBoxShadows {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  inset: string;
  colored: {
    primary: string;
    secondary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    light: string;
    dark: string;
  };
  navbarBoxShadow: string;
  sliderBoxShadow: {
    thumb: string;
  };
  tabsBoxShadow: {
    indicator: string;
  };
}

export interface CustomBorders {
  borderColor: string;
  borderWidth: {
    [key: number]: string;
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    section: string;
  };
}

type BoxShadow = {
  offset?: string[];
  radius?: string[];
  color: string;
  opacity: string;
  inset?: string;
};

export interface CustomFunctions {
  boxShadow: (offset, radius, color, opacity, inset) => BoxShadow;
  hexToRgb: (color: string) => string;
  linearGradient: (color1: string, color2: string) => string;
  pxToRem: (size: number) => string;
  rgba: (color: string, alpha: number) => string;
}

export interface CustomGlobals {
  [key: string]: unknown;
}

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      customColors: CustomThemeColors;
    };
    boxShadows: CustomBoxShadows;
    borders: CustomBorders;
    functions: CustomFunctions;
    typography: ExtendedTypographyOptions;
  }

  interface ThemeOptions {
    palette: {
      customColors: CustomThemeColors;
    };
    boxShadows: CustomBoxShadows;
    borders: CustomBorders;
    functions: CustomFunctions;
    typography: ExtendedTypographyOptions;
  }
}

export type COLORS =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'light'
  | 'dark'
  | 'none'
  | 'text'
  | 'white'
  | 'inherit';

declare module '@mui/material/styles/createTypography' {
  export type TypographyOptions = ExtendedTypographyOptions;
}

interface OwnerState {
  color?:
    | keyof CustomThemeColors['gradients']
    | keyof CustomThemeColors
    | keyof CustomThemeColors['text']
    | keyof CustomThemeColors['white']
    | keyof CustomThemeColors['black']
    | keyof CustomThemeColors['grey']
    | keyof CustomThemeColors['dark']
    | 'inherit'
    | string
    | COLORS;
  circular?: boolean;
  border?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  indicator?: boolean;
  variant?: 'gradient' | 'contained' | 'outlined' | 'text';
  container?: boolean;
  children?: React.ReactNode;
  iconOnly?: boolean;
  darkMode?: boolean;
  paginationSize?: 'small' | 'medium' | 'large' | null;
  active?: boolean;
  value?: number | string;
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

export type Sizes = 'small' | 'medium' | 'large';

export interface MDBoxProps extends BoxProps {
  variant?: 'contained' | 'gradient';
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  coloredShadow?: COLORS;
  ownerState?: {
    variant?: 'contained' | 'gradient';
    bgColor?: string;
    color?: string;
    opacity?: number;
    borderRadius?: string;
    shadow?: string;
    coloredShadow?: COLORS;
  };
  children?: ReactNode;
}
