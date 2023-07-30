'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';
import Logo from '../logo/logo';

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Blog', href: '/blog' },
];

const SignUp = () => {
  const styles = {
    wrapper: ['flex', 'justify-end'].join(' '),
    link: [
      'group',
      'relative',
      'flex',
      'items-center',
      'overflow-hidden',
      'rounded-lg',
      'px-3',
      'py-2',
      'shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]',
      'transition-colors',
      'duration-200',
      'text-sm',
      'text-white/80 hover:text-white/100',
    ].join(' '),
    label: ['hidden', 'md:block'].join(' '),
  };

  return (
    <div className={styles.wrapper}>
      <Link href={''} className={styles.link}>
        <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-lg [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        <span className="backdrop absolute inset-[1px] rounded-lg bg-black transition-colors duration-200" />
        <div className="z-10 flex items-center gap-2">
          <span className={styles.label}>Get DAOify</span>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.62451 0C2.86309 0 0.624512 2.23858 0.624512 5V11C0.624512 13.7614 2.86309 16 5.62451 16H11.6245C14.3859 16 16.6245 13.7614 16.6245 11V5C16.6245 2.23858 14.3859 0 11.6245 0H5.62451ZM5.34251 12.3171H8.43626C9.32262 12.3171 10.084 12.1424 10.7203 11.793C11.3596 11.4435 11.8496 10.9421 12.1905 10.2887C12.5343 9.63529 12.7061 8.85404 12.7061 7.94495C12.7061 7.0387 12.5343 6.26029 12.1905 5.60972C11.8496 4.95915 11.3624 4.46058 10.7289 4.11398C10.0953 3.76455 9.33967 3.58984 8.46183 3.58984H5.34251V12.3171ZM8.35955 10.7361H7.18768V5.1708H8.36381C8.90927 5.1708 9.36808 5.26739 9.74023 5.46058C10.1124 5.65376 10.3922 5.95489 10.5797 6.36398C10.7701 6.77308 10.8652 7.30006 10.8652 7.94495C10.8652 8.59552 10.7701 9.12677 10.5797 9.5387C10.3922 9.94779 10.111 10.2503 9.73597 10.4464C9.36381 10.6396 8.90501 10.7361 8.35955 10.7361Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

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

        <SignUp />
      </header>
    </>
  );
};

export default Header;
