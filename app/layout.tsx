'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../lib/theme/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { useEffect } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheets } from '@mui/styles';
import { MaterialUIControllerProvider } from './context';

export default function RootLayout({ children }) {
  // Handle MUI SSR style injection
  useServerInsertedHTML(() => {
    const sheets = new ServerStyleSheets();
    sheets.collect(children);
    return (
      <style
        id="jss-server-side"
        dangerouslySetInnerHTML={{ __html: sheets.toString() }}
      />
    );
  });

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <MaterialUIControllerProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </MaterialUIControllerProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
