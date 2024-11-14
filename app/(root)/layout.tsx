'use client';
import { useState } from 'react';
import Sidebar from '@components/Sidebar';
import Header from '@components/Header';
import Section from 'app/components/Section';
import { Avatar } from '@components/Avatar';

import Menu from '@components/Menu';
import { RootLayoutProps } from 'app/types/types';
const url =
  'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109';

const UserItems = [
  {
    label: 'Logout',
    href: 'signup'
  }
];

const RootLayout = ({ children }: RootLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="flex h-screen">
      <Sidebar />
      <Section>
        <Header>
          <Avatar
            imgUrl={url}
            altText="User Avatar"
            height={40}
            width={40}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <Menu
              items={UserItems}
              top="[5%]"
              right="[5%]"
              onClose={() => setIsMenuOpen(false)}
              isOpen={isMenuOpen}
            />
          )}
        </Header>
        {children}
      </Section>
    </main>
  );
};

export default RootLayout;
