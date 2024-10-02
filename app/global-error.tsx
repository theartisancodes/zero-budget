'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';

interface GlobalErrorProps {
  error: Error;
  statusCode?: number;
}

export default function GlobalError({
  error,
  statusCode = 500
}: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={statusCode} />
      </body>
    </html>
  );
}
