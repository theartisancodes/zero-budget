'use client';
import { usePathname } from 'next/navigation';
import { RootLayoutProps } from 'app/types/types';
import Sidebar from '@components/Sidebar';

const RootLayout = ({ children }: RootLayoutProps) => {
  const routes = ['Dashboard', 'Expenses', 'Incomes', 'Budgets', 'Reports'];

  const pathname = usePathname();
  const activeRoute = pathname.split('/')[1] || 'Dashboard';

  return (
    <main className="flex h-screen">
      <Sidebar routes={routes} activeRoute={activeRoute} />
      <section className="flex-grow p-8">{children}</section>
    </main>
  );
};

export default RootLayout;
