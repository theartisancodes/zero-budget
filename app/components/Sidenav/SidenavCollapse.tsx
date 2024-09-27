import React, { ReactNode } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import MDBox from '../MDBox';
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText
} from './styles/sidenavCollapse';
import { useMaterialUIController } from '../../context';

interface SidenavCollapseProps {
  icon: ReactNode;
  name: string;
  active?: boolean;
  [key: string]: unknown;
}

const SidenavCollapse: React.FC<SidenavCollapseProps> = ({
  icon,
  name,
  active = false,
  ...rest
}) => {
  const [controller] = useMaterialUIController();
  const {
    miniSidenav,
    transparentSidenav,
    whiteSidenav,
    darkMode,
    sidenavColor
  } = controller;

  return (
    <ListItem component="li">
      <MDBox
        {...rest}
        sx={(theme) =>
          collapseItem(theme, {
            active,
            transparentSidenav,
            whiteSidenav,
            darkMode,
            sidenavColor
          })
        }
      >
        <ListItemIcon
          sx={(theme) =>
            collapseIconBox(theme, {
              transparentSidenav,
              whiteSidenav,
              darkMode,
              active
            })
          }
        >
          {typeof icon === 'string' ? (
            <Icon sx={(theme) => collapseIcon(theme as any, { active })}>
              {icon}
            </Icon>
          ) : (
            icon
          )}
        </ListItemIcon>

        <ListItemText
          primary={name}
          sx={(theme) =>
            collapseText(theme, {
              miniSidenav,
              transparentSidenav,
              whiteSidenav,
              active
            })
          }
        />
      </MDBox>
    </ListItem>
  );
};

export default SidenavCollapse;
