import { ReactNode } from 'react';

type Props = {
  small?: boolean;
  noPadding?: boolean;
  className?: string;
  children: ReactNode;
};

const Section = ({ small, noPadding, className, children }: Props) => {
  const styles = {
    section: [
      small ? 'mt-[128px]' : 'mt-[400px]',
      noPadding ? 'w-screen' : 'w-full',
      'flex',
      'flex-col',
      'items-center',
    ].join(' '),
  };

  return (
    <section className={`${styles.section} ${className ?? ''}`}>
      {children}
    </section>
  );
};

export default Section;
