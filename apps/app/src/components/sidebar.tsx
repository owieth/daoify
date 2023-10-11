'use client';

import { Button } from '@ui/components/ui/button';
import TeamSwitcher from './team-switcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@ui/lib/utils';
import { UserNav } from './user-nav';

export function Sidebar() {
  const pathname = usePathname();

  const navbar = [
    {
      label: 'Dashboard',
      link: '/',
      icon: null,
    },
    {
      label: 'Onboarding',
      link: '/1',
      icon: null,
    },
    {
      label: 'Maintenance',
      link: '/2',
      icon: null,
    },
  ];

  return (
    <div className="flex flex-col justify-between">
      <div>
        <TeamSwitcher />

        <div className="mt-2 space-y-2">
          {navbar.map((item, i) => {
            const isActive = pathname === item.link;
            return (
              <Button
                key={i}
                variant={isActive ? 'outline' : 'ghost'}
                className={cn('w-full justify-start', isActive && 'bg-white')}
              >
                <Link href={item.link} className="flex w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  Listen Now
                </Link>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <UserNav />
      </div>
    </div>
  );
}
