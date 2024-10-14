'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';

interface GlobalErrorProps {
  errorMessage: string;
  statusCode?: number;
}

export default function GlobalError({
  errorMessage,
  statusCode = 500
}: GlobalErrorProps) {
  useEffect(() => {
    if (statusCode !== 404) {
      Sentry.captureException(new TypeError(errorMessage));
    }
  }, [errorMessage, statusCode]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center h-screen">
          <Error statusCode={statusCode} />
        </div>
      </body>
    </html>
  );
}
