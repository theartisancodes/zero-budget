import * as React from 'react';
import Image from 'next/image';
import loginImage from 'public/assets/images/login-image.png';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-white flex flex-1 fixed w-full h-full">
      <div className="flex-1 flex items-center justify-center p-8">
        {children}
      </div>
      <div className="hidden md:flex flex-1 relative h-full">
        <Image
          src={loginImage}
          alt="budgetImg"
          className="object-cover flex-shrink-0"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>
    </main>
  );
};

export default AuthLayout;
