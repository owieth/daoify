import Analytics from '@/components/analytics/analytics';
import Cobe from '@/components/cobe/cobe';
import Features from '@/components/features/features';
import Feedbacks from '@/components/feedbacks/feedbacks';
import GridVector from '@/components/grid-vector/grid-vector';
import Keyboard from '@/components/keyboard/keyboard';
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
          while delivering best-in-className SEO, performance.
        </span>
      </Section>

      <Section>
        <div className="relative p-16 lg:p-24">
          <Image src={'/dashboard.svg'} alt="" height={800} width={1600} />
        </div>
      </Section>

      <Section>
        <span className="text-center text-base">Features</span>
        <h2 className="text-md font-bold">Cutting-edge features for DAOs</h2>

        <div className="relative p-16 lg:p-24">
          <Features />
        </div>
      </Section>

      <Section>
        <h2 className="text-md font-bold pb-4">Always at your command</h2>
        <span className="text-center text-base"></span>

        <div className="relative flex flex-col items-center h-full w-full rounded-xl border border-line overflow-hidden p-4 lg:p-6">
          <Keyboard />
        </div>
      </Section>

      <Section>
        <Feedbacks />
        <Cobe />
      </Section>

      <Section>
        <Analytics />
      </Section>
    </main >
  );
}
