import { createTheme } from '@mui/material/styles';
import colors from '@styles/colors.scss';

const { danger_danger, danger_light_danger, danger_dark_danger } = colors;

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    fontFamily: "'Inter', 'Inria Serif', serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '44px',
      lineHeight: '52px'
    },
    h2: {
      fontSize: '40px',
      lineHeight: '48px'
    },
    h3: {
      fontSize: '32px',
      lineHeight: '40px'
    },
    h4: {
      fontSize: '28px',
      lineHeight: '36px'
    },
    h5: {
      fontSize: '24px',
      lineHeight: '32px'
    },
    h6: {
      fontSize: '22px',
      lineHeight: '30px'
    },
    subtitle1: {
      fontSize: '20px',
      lineHeight: '30px'
    },
    subtitle2: {
      fontSize: '18px',
      lineHeight: '28px'
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px'
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px'
    },
    caption: {
      fontSize: '12px',
      lineHeight: '16px'
    }
  },
  palette: {
    primary: {
      main: '#179347',
      light: '#52c075',
      dark: '#006228',
      contrastText: '#fff'
    },
    secondary: {
      main: '#13adb9',
      light: '#82dfe3',
      dark: '#10605f',
      contrastText: '#fff'
    },
    error: {
      main: `${danger_danger}`,
      light: `${danger_light_danger}`,
      dark: `${danger_dark_danger}`,
      contrastText: '#fff'
    }
  }
});

export default theme;
