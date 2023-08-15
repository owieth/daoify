import { ReactNode } from 'react';

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-md bg-[linear-gradient(to_right_bottom,white_30%,rgba(255,255,255,0.5)_100%)] bg-clip-text pb-4 font-bold text-transparent">
    {children}
  </h2>
);

export default H2;
