import { ReactNode } from 'react';
import '@styles/global.scss';

export const metadata = {
  title: 'Zero Budget',
  description: 'A simple budgeting app'
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
