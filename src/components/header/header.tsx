'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';
import Logo from '../logo/logo';
import Teaser from '../teaser/teaser';

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Blog', href: '/blog' },
  // { name: 'Sign Up', href: '/join' },
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
    nav: ['hidden', 'pointer-events-auto', 'md:block'].join(' '),
    bar: [
      'flex',
      'rounded-full',
      'bg-black/80',
      'border',
      'border-white/10',
      'text-sm',
      'px-3',
      'backdrop-blur',
    ].join(' '),
    button: [
      'flex',
      'items-center',
      'gap-1',
      'rounded-full',
      'bg-white/10',
      'px-3',
      'py-1',
      'whitespace-nowrap'
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

        <div className='py-1'>
          <Link className={styles.button} href="">
            Sign up
          </Link>
        </div>
      </ul>
    </nav>
  );
};

const Header = () => {
  const styles = {
    header: ['fixed', 'left-0', 'right-0', 'top-8', 'z-50'].join(' '),
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
      'backdrop-blur-sm',
    ].join(' '),
    wrapper: ['col-span-3', 'hidden', 'justify-center ', 'sm:flex'].join(' '),
  };

  return (
    <>
      <header className={styles.header}>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center px-4 sm:grid-cols-5 sm:px-6 lg:px-8">
          <Link href="/" className={styles.link}>
            <Logo height={24} width={24} />
          </Link>
          <div className={styles.wrapper}>
            <DesktopNavigation />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
