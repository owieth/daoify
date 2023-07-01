import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <section className="flex justify-center w-full mt-32">
      {children}
    </section>
  );
};

export default Section;