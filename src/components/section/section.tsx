import { ReactNode } from 'react';

type Props = {
  small?: boolean
  noPadding?: boolean;
  children: ReactNode;
};

const Section = ({ small, noPadding, children }: Props) => {
  const styles = {
    section: [
      small ? 'mt-[128px]' : 'mt-[400px]',
      noPadding && 'w-screen',
      'flex',
      'flex-col',
      'items-center',
      'w-full'
    ].join(' ')
  };

  return (
    <section className={styles.section}>
      {children}
    </section>
  );
};

export default Section;
