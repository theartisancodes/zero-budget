'use client';
import Error from 'next/error';

interface GlobalErrorProps {
  errorMessage: string;
  statusCode?: number;
}

export default function GlobalError({ statusCode = 500 }: GlobalErrorProps) {
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
