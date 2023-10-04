import { ReactNode } from 'react';

type Props = {
  id?: string;
  small?: boolean;
  noPadding?: boolean;
  className?: string;
  children: ReactNode;
};

const Section = ({ id, small, noPadding, className, children }: Props) => {
  const styles = {
    section: [
      small ? 'mt-[128px]' : 'mt-[400px]',
      noPadding ? '' : 'px-6 lg:px-16',
      'flex',
      'flex-col',
      'items-center',
      'w-full',
    ].join(' '),
  };

  return (
    <section id={id} className={`${styles.section} ${className ?? ''}`}>
      {children}
    </section>
  );
};

export default Section;
