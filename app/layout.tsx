import { ReactNode } from 'react';
import '@styles/global.scss';

export const metadata = {
  title: 'My Next.js App',
  description: 'Generated by Next.js'
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
