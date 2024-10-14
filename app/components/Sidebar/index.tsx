'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from 'app/lib/routes';
import Button from 'app/components/Button';
import Image from 'next/image';
import logo from 'public/assets/images/logo.png';

const Sidebar = () => {
  const pathname = usePathname();
  const topRoutes = Object.keys(ROUTES).filter(
    (key) => ROUTES[key].location === 'top'
  );
  const bottomRoutes = Object.keys(ROUTES).filter(
    (key) => ROUTES[key].location === 'bottom'
  );

  return (
    <aside className="flex flex-col justify-between rounded-3xl m-8 w-96 h-[95%] bg-custom-gradient p-8">
      <div className="flex flex-col mb-10">
        <Image src={logo} alt="Zero Budget Logo" />
      </div>
      <nav className="space-y-2">
        {topRoutes.map((key) => {
          const route = ROUTES[key];
          const isActive = pathname === route.path;

          return (
            <div key={key} className="flex flex-col gap-10">
              <Link href={route.path} passHref className="flex flex-col gap-10">
                <Button
                  state={isActive ? 'primary' : 'outline'}
                  icon={route.icon}
                  width="178"
                >
                  {route.name}
                </Button>
              </Link>
            </div>
          );
        })}
      </nav>

      <nav className="mt-auto space-y-2">
        {bottomRoutes.map((key) => {
          const route = ROUTES[key];
          const isActive = pathname === route.path;

          return (
            <div key={key} className="flex flex-col gap-10">
              <Link href={route.path} passHref className="flex flex-col gap-10">
                <Button
                  state={isActive ? 'primary' : 'outline'}
                  icon={route.icon}
                  width="178"
                >
                  {route.name}
                </Button>
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
