import { cn } from '@ui/lib/utils';
import { ReactNode } from 'react';

const H2 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={cn(
      'text-md bg-[linear-gradient(to_right_bottom,white_30%,rgba(255,255,255,0.5)_100%)] bg-clip-text pb-4 font-bold text-transparent',
      className,
    )}
  >
    {children}
  </h2>
);

export default H2;
