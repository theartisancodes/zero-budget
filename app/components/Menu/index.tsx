import React from 'react';
import { signOut } from 'next-auth/react';
import clsx from 'clsx';
import Card from 'app/components/Card';

interface MenuProps {
  items: Array<{ label: string; href: string }>;
  top?: number | string;
  right?: number | string;
  left?: number | string;
  bottom?: number | string;
  onClose?: () => void;
  isOpen?: boolean;
}

const Menu = ({
  items,
  top,
  bottom,
  right,
  left,
  onClose,
  isOpen
}: MenuProps) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed top-[9rem] right-[1%] z-50 flex flex-1"
      onClick={onClose}
    >
      <div className="fixed inset-0" />
      <Card
        className={clsx(
          'bg-neutral-white shadow rounded-xl py-1 px-2 w-[150px] h-auto absolute',
          `top-${top}`,
          `right-${right}`,
          `left-${left}`,
          `bottom-${bottom}`,
          'hover:bg-gray-500 hover:text-neutral-white',
          'weight-400'
        )}
      >
        {items.map((item, index) => (
          <a
            key={index}
            className={clsx(
              'flex font-pangram justify-center',
              'hover:bg-gray-90',
              'text-neutral-700',
              'text-2xl, align-center',
              'hover:text-neutral-white'
            )}
            href={item.href}
            onClick={() => signOut()}
          >
            {item.label}
          </a>
        ))}
      </Card>
    </div>
  );
};

export default Menu;
