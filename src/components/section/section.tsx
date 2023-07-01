import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <section className="flex flex-col items-center w-full mt-32">
      {children}
    </section>
  );
};

export default Section;