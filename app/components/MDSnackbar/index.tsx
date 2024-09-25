import { ReactNode, FC } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';

import MDBox from '../MDBox';
import MDTypography from '../MDTypography';
import MDSnackbarIconRoot from './MDSnackbarIconRoot';
import { useMaterialUIController } from '../../context';

interface MDSnackbarProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'dark'
    | 'light';
  icon: ReactNode;
  title: string;
  dateTime: string;
  content: ReactNode;
  close: () => void;
  bgWhite?: boolean;
}

const MDSnackbar: FC<MDSnackbarProps> = ({
  color = 'info',
  icon,
  title,
  dateTime,
  content,
  close,
  bgWhite = false,
  ...rest
}) => {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  let titleColor: string;
  let dateTimeColor: string;
  let dividerColor: boolean;

  if (bgWhite) {
    titleColor = color;
    dateTimeColor = 'dark';
    dividerColor = false;
  } else if (color === 'light') {
    titleColor = darkMode ? 'inherit' : 'dark';
    dateTimeColor = darkMode ? 'inherit' : 'text';
    dividerColor = false;
  } else {
    titleColor = 'white';
    dateTimeColor = 'white';
    dividerColor = true;
  }

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      {...rest}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={close}
        >
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <MDBox
        variant={bgWhite ? 'contained' : 'gradient'}
        bgColor={bgWhite ? 'white' : color}
        minWidth="21.875rem"
        maxWidth="100%"
        shadow="md"
        borderRadius="md"
        p={1}
        sx={{
          backgroundColor: ({ palette }) =>
            darkMode
              ? palette.customColors.background.default
              : palette[color] || palette.customColors.white.main
        }}
      >
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDSnackbarIconRoot
              fontSize="small"
              ownerState={{ color, bgWhite }}
            >
              {icon}
            </MDSnackbarIconRoot>
            <MDTypography
              variant="button"
              fontWeight="medium"
              color={titleColor}
              textGradient={bgWhite}
            >
              {title}
            </MDTypography>
          </MDBox>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDTypography variant="caption" color={dateTimeColor}>
              {dateTime}
            </MDTypography>
            <Icon
              sx={{
                color: ({ palette: { customColors } }) =>
                  (bgWhite && !darkMode) || color === 'light'
                    ? customColors.dark.main
                    : customColors.white.main,
                fontWeight: ({ typography: { fontWeightBold } }) =>
                  fontWeightBold,
                cursor: 'pointer',
                marginLeft: 2,
                transform: 'translateY(-1px)'
              }}
              onClick={close}
            >
              close
            </Icon>
          </MDBox>
        </MDBox>
        <Divider
          sx={{
            margin: 0,
            backgroundColor: dividerColor
              ? 'rgba(0, 0, 0, 0.12)'
              : 'rgba(255, 255, 255, 0.12)'
          }}
        />
        <MDBox
          p={1.5}
          sx={{
            fontSize: ({ typography: { size } }) => size.sm,
            color: ({ palette: { customColors } }) => {
              let colorValue =
                bgWhite || color === 'light'
                  ? customColors.text.main
                  : customColors.white.main;

              if (darkMode) {
                colorValue =
                  color === 'light' ? 'inherit' : customColors.white.main;
              }

              return colorValue;
            }
          }}
        >
          {content}
        </MDBox>
      </MDBox>
    </Snackbar>
  );
};

export default MDSnackbar;
