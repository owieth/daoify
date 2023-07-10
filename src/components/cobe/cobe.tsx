'use client';

import { useSpring } from '@react-spring/web';
import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

const Cobe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 0;
    let width = canvasRef.current!.offsetWidth;
    let globe: any;

    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);

    window.addEventListener('resize', onResize);

    if (canvasRef?.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [],
        onRender: state => {
          if (!pointerInteracting.current) {
            phi += 0.005;
          }
          state.phi = phi + r.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      });

      setTimeout(() => (canvasRef.current!.style.opacity = '1'));
    }

    return () => {
      window.removeEventListener('resize', onResize);
      globe.destroy();
    };
  }, [r]);

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={e => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current;
        canvasRef.current!.style.cursor = 'grabbing';
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        canvasRef.current!.style.cursor = 'grab';
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        canvasRef.current!.style.cursor = 'grab';
      }}
      onMouseMove={e => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 200,
          });
        }
      }}
      onTouchMove={e => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          const delta = e.touches[0].clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 100,
          });
        }
      }}
      style={{
        width: 600,
        height: 600,
        maxWidth: '100%',
        aspectRatio: 1,
        cursor: 'grab',
        contain: 'layout paint size',
        opacity: 0,
        transition: 'opacity 1s ease',
      }}
    />
  );
};

export default Cobe;
