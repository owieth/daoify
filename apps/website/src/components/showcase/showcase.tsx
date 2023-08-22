'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const ShowCase = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div ref={ref} className="mb-[12.8rem] [perspective:2000px]">
      <div
        className={`
          bg-hero-gradient relative rounded-lg border border-white/10 bg-white bg-opacity-[0.01]
          ${inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]'}
          before:bg-hero-glow before:absolute before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(70px)]
          ${inView && 'before:animate-image-glow'}
          `}
      >
        <svg
          className={`
            absolute left-0 top-0 h-full w-full
            [&_path]:stroke-white [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1] [&_path]:[strokeOpacity:0.2]
            ${inView && '[&_path]:animate-sketch-lines'}
            `}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>

        <Image
          src={'/dashboard.svg'}
          alt=""
          height={800}
          width={1600}
          className={`
            relative z-10 transition-opacity delay-[680ms]
            ${inView ? 'opacity-100' : 'opacity-0'}
            `}
        />
      </div>
    </div>
  );
};

export default ShowCase;
