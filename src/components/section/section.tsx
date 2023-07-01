import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Section = ({ children }: Props) => {
  return (
    <section className="mt-32 flex w-full flex-col items-center">
      {children}
    </section>
  );
};

export default Section;
