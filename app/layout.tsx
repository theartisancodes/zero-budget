import { ReactNode } from 'react';
import AuthProviderWrapper from './AuthProviderWrapper';
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/budget.ico" title="budget icons" />
      </head>
      <body>
        <AuthProviderWrapper>
          <div id="portal-root"></div>
          {children}
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
