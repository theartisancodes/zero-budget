import { RootLayoutProps } from 'app/types/types';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main>
      sidebar
      {children}
    </main>
  );
};

export default RootLayout;
