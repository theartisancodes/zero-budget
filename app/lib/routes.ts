import { ElementType } from 'react';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

interface Routes {
  [key: string]: {
    name: string;
    icon: ElementType;
    path: string;
    location?: 'top' | 'bottom' | 'top-right' | 'bottom-right';
  };
}
export const ROUTES: Routes = {
  DASHBOARD: {
    name: 'Dashboard',
    icon: SpaceDashboardIcon,
    path: '/',
    location: 'top'
  },
  EXPENSES: {
    name: 'Expenses',
    icon: AccountBalanceWalletIcon,
    path: '/expenses',
    location: 'top'
  },
  BUDGETS: {
    name: 'Budgets',
    icon: PointOfSaleIcon,
    path: '/budgets',
    location: 'top'
  },
  INVESTMENTS: {
    name: 'Investments',
    icon: AssuredWorkloadIcon,
    path: '/investments',
    location: 'top'
  },
  ADMIN: {
    name: 'Admin',
    icon: AdminPanelSettingsIcon,
    path: '/admin',
    location: 'bottom'
  }
};
