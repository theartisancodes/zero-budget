'use client';

import Image from 'next/image';
import NotFoundImg from '../public/assets/images/not-found.svg';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen gap-8">
      <Image
        src={NotFoundImg}
        alt="Not Found"
        width={800}
        height={800}
        className="bg-neutral-white"
      />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    </div>
  );
}
