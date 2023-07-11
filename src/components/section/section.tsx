import { ReactNode } from 'react';

type Props = {
  margin?: number;
  children: ReactNode;
};

const Section = ({ margin, children }: Props) => {
  const styles = {
    section: [
      margin ? `mt-${margin}` : 'mt-[400px]',
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
