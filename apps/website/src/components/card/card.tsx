'use client';

import { cn } from '@ui/lib/utils';
import { ReactNode, useRef, useState } from 'react';

type Props = {
  shiny?: boolean;
  nested?: boolean;
  children: ReactNode;
};

export const Card = ({ shiny, nested, children }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);

  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-gradient relative overflow-hidden rounded-2xl bg-gradient-to-tr from-neutral-950 to-neutral-900 p-px"
    >
      <div className="user-select-none center pointer-events-none absolute left-1/2 top-0 h-px w-[300px] max-w-[300px] -translate-x-1/2 bg-gradient-to-r from-white/0 from-0% via-white/30 via-50% to-white/0 to-100%"></div>
      <div className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl md:max-w-[400px]"></div>

      {shiny && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
          }}
        />
      )}

      <div
        className={cn(
          'h-full rounded-2xl bg-gradient-to-tr from-black to-neutral-950',
          nested ? 'p-4' : 'grid gap-16 p-8',
        )}
      >
        {children}
      </div>
    </div>
  );
};
