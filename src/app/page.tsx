import Analytics from '@/components/analytics/analytics';
import Cobe from '@/components/cobe/cobe';
import Features from '@/components/features/features';
import Feedbacks from '@/components/feedbacks/feedbacks';
import Keyboard from '@/components/keyboard/keyboard';
import Section from '@/components/section/section';
import Stars from '@/components/stars/stars';
import Teaser from '@/components/teaser/teaser';
import Image from 'next/image';

const styles = {
  main: ['flex', 'flex-col', 'items-center', 'min-h-screen', 'pt-48'].join(' '),
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Stars />

      <Teaser />

      <Section small>
        <h1 className="text-md font-bold md:text-lg">Latest Legal Wrapper</h1>
        <span className="w-2/4 text-center text-sm md:text-base">
          Zero code, maximum speed. Make professional sites easy, fast and fun
          while delivering best-in-className SEO, performance.
        </span>
      </Section>

      <Section small>
        <div className="relative md:px-8 lg:px-16">
          <Image src={'/dashboard.svg'} alt="" height={800} width={1600} />
        </div>
      </Section>

      <div className="z-[1] bg-black">
        <Section>
          <span className="text-center text-base">Features</span>
          <h2 className="text-md font-bold">Cutting-edge features for DAOs</h2>

          <div className="relative sm:p-4 md:p-8 lg:p-16">
            <Features />
          </div>
        </Section>

        <Section className="hidden md:flex">
          <h2 className="pb-4 text-md font-bold">Always at your command</h2>
          <span className="text-center text-base"></span>

          <div className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-xl border border-line p-4 lg:p-6">
            <Keyboard />
          </div>
        </Section>

        <Section noPadding>
          <div className="relative flex w-full justify-center overflow-hidden">
            <div className="absolute bottom-0 top-0 z-10 flex items-center justify-center">
              <div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] after:content-['']">
                <div className="flex w-full animate-infinite-slider">
                  <Feedbacks />
                </div>
              </div>
            </div>
            <Cobe />
          </div>
        </Section>

        <Section>
          <Analytics />
        </Section>

        <Section noPadding>
          <div className="relative min-h-[60rem] w-full">
            <div className="absolute left-0 right-0 top-0 flex w-full justify-center overflow-hidden">
              <div className="aspect-square max-h-[60rem] min-w-[60rem] overflow-hidden rounded-full bg-gradient-to-b from-white from-0% via-white/30 via-[2%] to-white/0 to-25% p-px">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
                  <div className="mx-auto h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-48 flex flex-col items-center gap-12 text-center">
              <div>
                <h1 className="text-md font-bold md:text-lg">
                  Built for the future.
                </h1>
                <h1 className="text-md font-bold md:text-lg">
                  Available today.
                </h1>
              </div>

              <div className="relative h-[300px] w-[300px]">
                <Image src={'appIcon.svg'} alt="" fill />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
