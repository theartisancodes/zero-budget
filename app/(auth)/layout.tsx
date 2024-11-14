import * as React from 'react';
import DemoCard from '@components/DemoCard';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-white flex flex-1 w-full h-full items-center justify-center fixed">
      <div className="bg-white flex flex-1 max-w-screen-xl h-[90%] mx-auto p-8">
        <div className="flex-1 flex items-center justify-center p-8">
          {children}
        </div>
        <div className="hidden md:flex flex-1 relative p-2">
          <div className="bg-primary-dark rounded-3xl w-full">
            <DemoCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
