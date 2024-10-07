import { RootLayoutProps } from 'app/types/types';
import Sidebar from '@components/Sidebar';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex-grow p-8">{children}</section>
    </main>
  );
};

export default RootLayout;
