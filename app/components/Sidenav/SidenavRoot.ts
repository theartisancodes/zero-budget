import Drawer from '@mui/material/Drawer';
import { styled, Theme } from '@mui/material/styles';

interface SidenavRootProps {
  miniSidenav: boolean;
  transparentSidenav: boolean;
  whiteSidenav: boolean;
  darkMode: boolean;
}

export default styled(Drawer)<{ ownerState: SidenavRootProps }>(
  ({ theme, ownerState }) => {
    const { palette, boxShadows, transitions, breakpoints, functions } =
      theme as Theme;
    const { transparentSidenav, whiteSidenav, miniSidenav, darkMode } =
      ownerState;

    const { transparent, gradients, white, background } = palette;

    const sidebarWidth = 250;
    const { xxl } = boxShadows;
    const { pxToRem, linearGradient } = functions;

    let backgroundValue = darkMode
      ? background.sidenav
      : linearGradient(gradients.dark.main, gradients.dark.state);

    if (transparentSidenav) {
      backgroundValue = transparent.main;
    } else if (whiteSidenav) {
      backgroundValue = white.main;
    }

    const drawerOpenStyles = () => ({
      background: backgroundValue,
      transform: 'translateX(0)',
      transition: transitions.create('transform', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter
      }),

      [breakpoints.up('xl')]: {
        boxShadow: transparentSidenav ? 'none' : xxl,
        marginBottom: transparentSidenav ? 0 : 'inherit',
        left: '0',
        width: sidebarWidth,
        transform: 'translateX(0)',
        transition: transitions.create(['width', 'background-color'], {
          easing: transitions.easing.sharp,
          duration: transitions.duration.enteringScreen
        })
      }
    });

    const drawerCloseStyles = () => ({
      background: backgroundValue,
      transform: `translateX(${pxToRem(-320)})`,
      transition: transitions.create('transform', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter
      }),

      [breakpoints.up('xl')]: {
        boxShadow: transparentSidenav ? 'none' : xxl,
        marginBottom: transparentSidenav ? 0 : 'inherit',
        left: '0',
        width: pxToRem(96),
        overflowX: 'hidden',
        transform: 'translateX(0)',
        transition: transitions.create(['width', 'background-color'], {
          easing: transitions.easing.sharp,
          duration: transitions.duration.shorter
        })
      }
    });

    return {
      '& .MuiDrawer-paper': {
        boxShadow: xxl,
        border: 'none',

        ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles())
      }
    };
  }
);
