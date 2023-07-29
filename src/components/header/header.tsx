'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';
import Logo from '../logo/logo';

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Blog', href: '/blog' },
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
        'transition',
        'transition-color',
        isActive ? 'text-white' : 'text-white/50 hover:text-white/80',
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
    nav: ['hidden', 'pointer-events-auto', 'xs:block'].join(' '),
    bar: [
      'flex',
      'rounded-full',
      'bg-black/80',
      'border',
      'border-white/10',
      'text-sm',
      'px-3',
    ].join(' '),
    button: [
      'flex',
      'items-center',
      'gap-1',
      'rounded-full',
      'bg-white/10',
      'px-3',
      'py-1',
      'whitespace-nowrap',
    ].join(' '),
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.bar}>
        {navigation.map((item, i) => (
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
    header: [
      'fixed',
      'left-0',
      'right-0',
      'py-4',
      'px-4',
      'z-50',
      'm-0',
      'grid',
      'w-full',
      'grid-cols-2',
      'border-b',
      'border-white/10',
      'items-center',
      'backdrop-blur-sm',
      'xs:grid-cols-5',
      'xs:px-6',
      'lg:px-8',
    ].join(' '),
    link: [
      'inline-flex',
      'justify-center',
      'items-center',
      'w-fit',
      'rounded-full',
      'border',
      'border-white/10',
      'bg-black/80',
      'p-3',
    ].join(' '),
    wrapper: ['col-span-3', 'hidden', 'justify-center ', 'xs:flex'].join(' '),
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.link}>
          <Logo height={24} width={24} />
        </Link>
        <div className={styles.wrapper}>
          <DesktopNavigation />
        </div>
      </header>
    </>
  );
};

export default Header;
