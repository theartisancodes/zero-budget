import { Link } from 'next/link';
import styles from './styles.module.scss';
import { Button } from '@mui/material';

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>
            <DashboardIcon fontSize="small" />
            Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
