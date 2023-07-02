import GridVector from '@/components/grid-vector/grid-vector';
import Section from '@/components/section/section';
import Teaser from '@/components/teaser/teaser';
import Image from 'next/image';

const styles = {
  main: [
    'flex',
    'flex-col',
    'items-center',
    'min-h-screen',
    'p-24',
    'pt-48',
  ].join(' '),
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="absolute top-0 -z-10">
        <GridVector />
      </div>

      <Teaser />

      <Section>
        <h1 className="text-lg font-bold">Latest Legal Wrapper</h1>
        <span className="w-2/4 text-center text-base">
          Zero code, maximum speed. Make professional sites easy, fast and fun
          while delivering best-in-class SEO, performance.
        </span>
      </Section>

      <Section>
        <div className="relative p-16 lg:p-24">
          <Image src={'/dashboard.svg'} alt="" height={800} width={1600} />
        </div>
      </Section>
    </main>
  );
}
