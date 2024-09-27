'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@mui/material/styles';
import { useMaterialUIController, setMiniSidenav } from '../context';
import Sidenav from '../components/Sidenav';
import theme from '../../lib/theme/theme';
import HomeRoute from '../routes/routes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, direction, sidenavColor } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const pathname = usePathname();

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  useEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const routes = [HomeRoute]; // Define the routes

  return (
    <Sidenav
      color={sidenavColor}
      brand={null}
      brandName="Material Dashboard 2"
      routes={routes} // Pass the routes here
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    />
  );
};

export default Layout;
