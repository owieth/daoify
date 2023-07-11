import { ReactNode } from 'react';

type Props = {
  small?: boolean
  children: ReactNode;
};

const Section = ({ small: margin, children }: Props) => {
  const styles = {
    section: [
      margin ? 'mt-[128px]' : 'mt-[400px]',
      'flex',
      'flex-col',
      'items-center',
      'w-full'
    ].join(' ')
  };

  console.log(styles);


  return (
    <section className={styles.section}>
      {children}
    </section>
  );
};

export default Section;
