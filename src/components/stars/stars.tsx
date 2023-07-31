'use client';

import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const Stars = () => {
  const styles = {
    particles: [
      'absolute',
      'w-screen',
      'h-screen',
      'z-[-1]',
      'before:absolute',
      'before:h-full',
      'before:w-[200px]',
      'before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)]',
      "before:content-['']",
      'after:absolute',
      'after:right-0',
      'after:top-0',
      'after:z-[2]',
      'after:h-full',
      'after:w-[200px]',
      'after:bg-[linear-gradient(to_left,black_0%,rgba(255,255,255,0)_100%)]',
      "after:content-['']",
    ].join(' '),
  };

  const particlesInit = useCallback(
    async (engine: Engine) => await loadFull(engine),
    []
  );

  return (
    <Particles
      options={{
        fpsLimit: 120,
        fullScreen: {
          enable: false,
        },
        particles: {
          number: {
            value: 5,
            density: {
              enable: true,
              value_area: 50,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: { min: 0, max: 0.5 },
            animation: {
              count: 1,
              enable: true,
              speed: 0.5,
              startValue: 'min',
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        detectRetina: true,
      }}
      init={particlesInit}
      className={styles.particles}
    />
  );
};

export default Stars;
