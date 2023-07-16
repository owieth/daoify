import Analytics from '@/components/analytics/analytics';
import Cobe from '@/components/cobe/cobe';
import Features from '@/components/features/features';
import Feedbacks from '@/components/feedbacks/feedbacks';
import GridVector from '@/components/grid-vector/grid-vector';
import Keyboard from '@/components/keyboard/keyboard';
import Logo from '@/components/logo/logo';
import Section from '@/components/section/section';
import Teaser from '@/components/teaser/teaser';
import Image from 'next/image';

const styles = {
  main: [
    'flex',
    'flex-col',
    'items-center',
    'min-h-screen',
    'pt-48',
    'px-6 lg:px-16',
  ].join(' '),
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="absolute top-0 -z-10 w-full h-full">
        <GridVector />
      </div>

      <Teaser />

      <Section small>
        <h1 className="font-bold text-md md:text-lg">Latest Legal Wrapper</h1>
        <span className="w-2/4 text-center text-sm md:text-base">
          Zero code, maximum speed. Make professional sites easy, fast and fun
          while delivering best-in-className SEO, performance.
        </span>
      </Section>

      <Section small>
        <div className="relative md:p-8 lg:p-16">
          <Image src={'/dashboard.svg'} alt="" height={800} width={1600} />
        </div>
      </Section>

      <Section>
        <span className="text-center text-base">Features</span>
        <h2 className="text-md font-bold">Cutting-edge features for DAOs</h2>

        <div className="relative sm:p-4 md:p-8 lg:p-16">
          <Features />
        </div>
      </Section>

      <Section className='hidden md:block'>
        <h2 className="pb-4 text-md font-bold">Always at your command</h2>
        <span className="text-center text-base"></span>

        <div className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-xl border border-line p-4 lg:p-6">
          <Keyboard />
        </div>
      </Section>

      <Section noPadding>
        <div className="relative flex justify-center w-full overflow-hidden">
          <div className="absolute bottom-0 top-0 z-10 flex items-center justify-center">
            <Feedbacks />
          </div>
          <Cobe />
        </div>
      </Section>

      <Section>
        <Analytics />
      </Section>

      <Section>
        <div className="relative w-full min-h-[60rem]">
          <div className="absolute left-0 right-0 top-0 flex w-full justify-center overflow-hidden">
            <div className="aspect-square max-h-[60rem] min-w-[60rem] overflow-hidden rounded-full bg-gradient-to-b p-px from-white from-0% via-white/30 via-[2%] to-white/0 to-25%">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
                <div className="mx-auto h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
              </div>
            </div>
          </div>

          <div className='relative flex flex-col items-center text-center gap-12 z-10 mt-48'>
            <div>
              <h1 className="text-lg font-bold">Built for the future.</h1>
              <h1 className="text-lg font-bold">Available today.</h1>
            </div>

            <div className="relative flex flex-col max-h-[150px] max-w-[150px] items-center rounded-xl border border-line p-4 lg:p-6">
              <Logo height={128} width={128} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
