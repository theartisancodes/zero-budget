import { ReactNode } from 'react';
import HomeIcon from '@mui/icons-material/Home';

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

const HomeRoute: Route = {
  type: 'collapse',
  name: 'Home',
  icon: <HomeIcon />,
  key: 'home',
  route: '/',
  noCollapse: true
};

export default HomeRoute;
