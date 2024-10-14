import React from 'react';
import Card from '@components/Card';
import clsx from 'clsx';

interface HeaderProps {
  children: React.ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  return (
    <Card
      className={clsx(
        'h-24 sticky rounded-2xl bg-neutral-white shadow',
        'flex basis-[80%] items-center justify-end',
        'px-6'
      )}
    >
      {children}
    </Card>
  );
};

export default Header;
