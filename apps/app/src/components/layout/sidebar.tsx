'use client';

import { Button } from '@ui/components/ui/button';
import { cn } from '@ui/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../logo/logo';
import { UserNav } from './user-nav';
import { ReactNode } from 'react';

type SidebarItemType = {
  label: string;
  link: string;
  icon: ReactNode;
};

export function Sidebar() {
  const pathname = usePathname();

  const navbar = {
    ctas: [
      {
        label: 'Create DAO',
        link: '/new',
        icon: null,
      },
    ],
    phases: [
      {
        label: 'Dashboard',
        link: '/dashboard',
        icon: null,
      },
      {
        label: 'Payments',
        link: '/payments',
        icon: null,
      },
      {
        label: 'Maintenance',
        link: '/maintenance',
        icon: null,
      },
    ],
    sites: [
      {
        label: 'Overview',
        link: '/',
        icon: null,
      },
    ],
  };

  const renderLinkItem = (item: SidebarItemType, i: number) => {
    const isActive = pathname === item.link;
    return (
      <Button
        key={i}
        variant={isActive ? 'outline' : 'ghost'}
        className={cn(
          'w-full justify-start',
          isActive && 'bg-white text-black',
        )}
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
          {item.label}
        </Link>
      </Button>
    );
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4">
          <Logo height={25} width={25} className="text-black dark:text-white" />
          <h1 className="text-md font-bold">DAOify</h1>
        </div>

        <div className="my-2 w-full border" />

        <div className="mt-2 space-y-2">{navbar.ctas.map(renderLinkItem)}</div>

        <div className="my-2 w-full border" />

        <div className="mt-2 space-y-2">
          {navbar.phases.map(renderLinkItem)}
        </div>

        <div className="my-2 w-full border" />

        <div className="mt-2 space-y-2">{navbar.sites.map(renderLinkItem)}</div>
      </div>

      <UserNav />
    </div>
  );
}
