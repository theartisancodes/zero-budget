import React from 'react';
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
      className="fixed inset-0 z-50 flex justify-end items-start md:items-start mt-20 mr-8"
      onClick={onClose}
    >
      <div className="fixed inset-0" onClick={onClose} />

      <Card
        className={clsx(
          'bg-primary shadow rounded-lg py-2 px-3 w-48 h-auto z-50',
          'absolute md:relative',
          'md:w-64',
          'top-[9rem] md:top-auto',
          `top-${top}`,
          `right-${right}`,
          `left-${left}`,
          `bottom-${bottom}`,
          'hover:bg-primary-dark hover:text-white',
          'font-medium'
        )}
        style={{
          top: typeof top === 'string' ? top : `${top}px`,
          right: typeof right === 'string' ? right : `${right}px`,
          left: typeof left === 'string' ? left : `${left}px`,
          bottom: typeof bottom === 'string' ? bottom : `${bottom}px`
        }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            className={clsx(
              'flex justify-center px-4 py-2',
              'hover:bg-primary-dark',
              'text-white hover:font-bold',
              'text-3xl md:text-lg'
            )}
            href={item.href}
            onClick={(e) => {
              e.stopPropagation();
              onClose && onClose();
            }}
          >
            {item.label}
          </a>
        ))}
      </Card>
    </div>
  );
};

export default Menu;
