'use client';
import { useState } from 'react';
import Sidebar from '@components/Sidebar';
import Header from '@components/Header';
import Section from 'app/components/Section';
import { Avatar } from '@components/Avatar';
import { useRouter } from 'next/navigation';

import Menu from '@components/Menu';
import { RootLayoutProps } from 'app/types/types';
import { useUserSession } from '@hooks/queries/useUserSession';

const UserItems = [
  {
    label: 'Logout',
    href: '/api/auth/logout'
  }
];

const RootLayout = async ({ children }: RootLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { user } = await useUserSession();

  const handleLogout = () => {
    setIsMenuOpen(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    router.push('/api/auth/logout');
  };
  return (
    <main className="flex h-screen">
      <Sidebar />
      <Section>
        <Header>
          <Avatar
            imgUrl={user?.picture}
            altText="User Avatar"
            defaultText={user?.name}
            height={40}
            width={40}
            onClick={() => setIsMenuOpen(true)}
          />
          {isMenuOpen && (
            <Menu
              items={UserItems}
              isOpen={isMenuOpen}
              onClose={handleLogout}
            />
          )}
        </Header>
        {children}
      </Section>
    </main>
  );
};

export default RootLayout;
