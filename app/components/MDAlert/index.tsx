import React, { useState, ReactNode } from 'react';
import Fade from '@mui/material/Fade';

import MDBox from '../MDBox';
import MDAlertRoot from './MDAlertRoot';
import MDAlertCloseIcon from './MDAlertCloseIcon';

interface MDAlertProps {
  color?: 'info' | 'success' | 'warning' | 'error';
  dismissible?: boolean;
  children: ReactNode;

  [key: string]: unknown;
}

function MDAlert({
  color = 'info',
  dismissible = false,
  children,
  ...rest
}: MDAlertProps) {
  const [alertStatus, setAlertStatus] = useState<
    'mount' | 'fadeOut' | 'unmount'
  >('mount');

  const handleAlertStatus = () => setAlertStatus('fadeOut');
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <MDAlertRoot ownerState={{ color }} {...rest}>
        <MDBox display="flex" alignItems="center" color="white">
          {children}
        </MDBox>
        {dismissible && (
          <MDAlertCloseIcon onClick={mount ? handleAlertStatus : undefined}>
            &times;
          </MDAlertCloseIcon>
        )}
      </MDAlertRoot>
    </Fade>
  );

  switch (alertStatus) {
    case 'mount':
      return alertTemplate();
    case 'fadeOut':
      setTimeout(() => setAlertStatus('unmount'), 400);
      return alertTemplate(false);
    default:
      return null;
  }
}

export default MDAlert;
