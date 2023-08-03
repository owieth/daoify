import Link from 'next/link';
import Logo from '../logo/logo';
import IconLink from '../icons/link';
import { ReactNode } from 'react';

const Column = ({ children }: { children: ReactNode }) => (
  <div className="col-span-2 grid gap-1">{children}</div>
);

const FooterLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-sm font-medium text-white">{children}</p>
);

const FooterItem = ({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) => {
  const isExternal = link.startsWith('http');

  const styles = {
    link: [
      'group',
      'inline-flex',
      'w-fit',
      'items-center',
      'gap-1',
      'border-b',
      'border-transparent',
      'text-white/50',
      'transition-colors',
      'hover:border-white hover:text-white',
    ].join(' '),
  };

  return (
    <Link
      href={link}
      className={styles.link}
      target={isExternal ? '_blank' : '_self'}
    >
      {children}
      {isExternal && <IconLink />}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative text-sm text-white/50 sm:gap-16">
          <div className="grid grid-cols-4 items-start gap-8 py-16 sm:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 sm:col-span-8 lg:col-span-4">
              <div className="grid max-w-[15rem] gap-6">
                <Link href="/">
                  <Logo height={24} width={24} />
                </Link>
                <p>Creating next gen DAO Software.</p>
                <p className="text-xs">
                  © swissDAO Labs 2023. All rights reserved.
                </p>
              </div>
            </div>

            <Column>
              <FooterLabel>Product</FooterLabel>
              <FooterItem link="">Pricing</FooterItem>
              <FooterItem link="">Features</FooterItem>
              <FooterItem link="">Changelog</FooterItem>
              <FooterItem link="">Feedback</FooterItem>
            </Column>

            <Column>
              <FooterLabel>Company</FooterLabel>
              <FooterItem link="">About</FooterItem>
              <FooterItem link="">Blog</FooterItem>
              <FooterItem link="https://www.linkedin.com/company/94252137/admin/">
                LinkedIn
              </FooterItem>
              <FooterItem link="">Twitter</FooterItem>
            </Column>

            <Column>
              <FooterLabel>Resources</FooterLabel>
              <FooterItem link="">Design</FooterItem>
              <FooterItem link="">Code</FooterItem>
              <FooterItem link="">Stack</FooterItem>
              <FooterItem link="">Documentation</FooterItem>
            </Column>

            <Column>
              <FooterLabel>Legal</FooterLabel>
              <FooterItem link="">Privacy Policy</FooterItem>
              <FooterItem link="">Terms of Service</FooterItem>
              <FooterItem link="">Acceptable Use</FooterItem>
              <FooterItem link="">Bug Bounty Programm</FooterItem>
            </Column>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
