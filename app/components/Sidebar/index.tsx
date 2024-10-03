import React from 'react';
import Button from 'app/components/Button';

interface SidebarProps {
  routes: string[];
  activeRoute: string;
}

const Sidebar = ({ routes, activeRoute }: SidebarProps) => {
  return (
    <aside className="flex fixed flex-col justify-start w-96 h-[95%] p-4 bg-gray-900 from-gray-500 shadow-outline border-r-2">
      <nav className="space-y-2">
        {routes.map((route, index) => {
          const isActive = route === activeRoute;

          return (
            <Button
              key={index}
              text={route}
              onClick={() => console.log(`Navigating to ${route}`)}
              state={isActive ? 'primary' : 'secondary'}
              aria-current={isActive ? 'page' : undefined}
            />
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
