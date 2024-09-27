'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useMaterialUIController } from '../context';
import Sidenav from '../components/Sidenav';
import HomeRoute from '../routes/routes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  const [controller] = useMaterialUIController();
  const { direction, sidenavColor } = controller;

  const pathname = usePathname();

  useEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const routes = [HomeRoute];

  return (
    <Sidenav
      color={sidenavColor}
      brand={null}
      brandName="Zero Budget"
      routes={routes}
    />
  );
};

export default Layout;
