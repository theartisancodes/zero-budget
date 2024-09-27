import React, { useEffect, ReactNode } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';

import MDBox from '../MDBox';
import MDTypography from '../MDTypography';

import SidenavCollapse from './SidenavCollapse';

import SidenavRoot from './SidenavRoot';
import sidenavLogoLabel from './styles/sidenav';

import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav
} from '../../context';

interface Route {
  type: 'collapse' | 'title' | 'divider';
  name?: string;
  icon?: ReactNode;
  title?: string;
  noCollapse?: boolean;
  key: string;
  href?: string;
  route?: string;
}

interface SidenavProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'dark';
  brand?: string;
  brandName: string;
  routes: Route[];
}

const Sidenav: React.FC<SidenavProps> = ({
  brand = '',
  brandName,
  routes,
  ...rest
}) => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } =
    controller;
  const pathname = usePathname();
  const collapseName = pathname?.replace('/', '');

  let textColor = 'white';

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = 'dark';
  } else if (whiteSidenav && darkMode) {
    textColor = 'inherit';
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(
        dispatch,
        window.innerWidth < 1200 ? false : transparentSidenav
      );
      setWhiteSidenav(
        dispatch,
        window.innerWidth < 1200 ? false : whiteSidenav
      );
    }

    window.addEventListener('resize', handleMiniSidenav);
    handleMiniSidenav();

    return () => window.removeEventListener('resize', handleMiniSidenav);
  }, [dispatch, transparentSidenav, whiteSidenav]);

  const renderRoutes = routes.map(
    ({ type, name, icon, title, noCollapse, key, href, route }) => {
      if (type === 'collapse') {
        return href ? (
          <Link
            href={href}
            key={key}
            passHref
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        ) : (
          <Link href={route || '/'} key={key} passHref>
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
            />
          </Link>
        );
      } else if (type === 'title') {
        return (
          <MDTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MDTypography>
        );
      } else if (type === 'divider') {
        return (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        );
      }

      return null;
    }
  );

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: 'block', xl: 'none' }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: 'pointer' }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
          </MDTypography>
        </MDBox>
        <Link href="/" passHref>
          <MDBox display="flex" alignItems="center">
            {brand && (
              <MDBox component="img" src={brand} alt="Brand" width="2rem" />
            )}
            <MDBox
              width={!brandName && '100%'}
              sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
            >
              <MDTypography
                component="h6"
                variant="button"
                fontWeight="medium"
                color={textColor}
              >
                {brandName}
              </MDTypography>
            </MDBox>
          </MDBox>
        </Link>
      </MDBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
};

export default Sidenav;
