import { ReactNode } from 'react';
import '@styles/global.scss';

export const metadata = {
  title: 'Zero Budget',
  description: 'Streamlined Financial Management for Smarter Spending'
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/budget.ico" title="budget icons" />
      </head>
      <body>
        <div id="portal-root"></div>
        {children}
      </body>
    </html>
  );
}
