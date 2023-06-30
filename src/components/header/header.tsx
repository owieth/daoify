'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Events', href: '#' },
  { name: 'Blog', href: '/#' },
];

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => {
  const isActive = usePathname() === href;

  const styles = {
    link: ({ isActive }: { isActive: boolean }) =>
      [
        'block',
        'relative',
        'px-3',
        'py-2',
        'text-white/50',
        'transition',
        'transition-color',
        isActive ? 'text-white' : 'hover:text-white/80',
      ].join(' '),
    activeLink: [
      'absolute',
      'inset-x-1',
      '-bottom-px',
      'h-px',
      'bg-gradient-to-r',
      'from-white/0',
      'via-white/40',
      'to-white/0',
    ].join(' '),
  };

  return (
    <li>
      <Link href={href} className={styles.link({ isActive })}>
        {children}
        {isActive && <span className={styles.activeLink} />}
      </Link>
    </li>
  );
};

const DesktopNavigation = () => {
  const styles = {
    nav: ['hidden', 'pointer-events-auto', 'md:block'].join(' '),
    bar: [
      'flex',
      'rounded-full',
      'bg-black/80',
      'border',
      'border-white/10',
      'text-sm',
      'font-medium',
      'px-3',
      'text-zinc-800',
      'shadow-lg',
      'shadow-zinc-800/50',
      'ring-1',
      'ring-zinc-900/5',
      'backdrop-blur',
    ].join(' '),
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.bar}>
        {navigation.slice(1).map((item, i) => (
          <NavItem key={i} href={item.href}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

const Header = () => {
  const styles = {
    header: ['relative', 'flex', 'flex-col', 'h-24', 'z-10'].join(' '),
    link: [
      'absolute',
      'top-0',
      'left-6',
      'flex',
      'flex-1',
      'justify-center',
      'items-center',
      'h-24',
    ].join(' '),
    wrapper: [
      'absolute',
      'top-0',
      'left-2/4',
      'flex',
      'flex-1',
      'justify-end',
      'items-center',
      'h-24',
      'p-6',
      'z-15',
      'lg:justify-center',
    ].join(' '),
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.link}>
          {/* <Logo className={''} width={128} height={128} /> */}
        </Link>

        <div className={styles.wrapper}>
          <div className="relative flex gap-4">
            <DesktopNavigation />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
