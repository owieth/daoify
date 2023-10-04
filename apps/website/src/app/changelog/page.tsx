import Section from '@/src/components/section/section';
import Image from 'next/image';
import Link from 'next/link';

const releases = [
  {
    date: 'Sep 25, 2023',
    image: '/appIcon.svg',
    link: 'https://github.com/daoify-website',
    title: 'Announcing DAOify',
    lead: 'Create DAOs',
  },
];

export default function Changelog() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-md font-bold md:text-lg">Changelog</h1>

      <Section small>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 py-16">
          <ul className="flex flex-col">
            {releases.map((release, i) => (
              <li className="relative flex w-full flex-col sm:flex-row" key={i}>
                <div className="flex w-full pb-4 sm:w-[200px] sm:pb-0">
                  <p className="text-sm">{release.date}</p>
                </div>
                <div className="relative hidden sm:flex sm:w-[150px]">
                  <div className="sticky left-0 top-[102px] z-10 mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-500"></div>
                  <div className="absolute left-0.5 top-0.5 h-full w-0.5 bg-zinc-800"></div>
                </div>
                <div className="relative w-full pb-16">
                  <Link href={release.link} target="_blank" />

                  <div className="space-y-4">
                    <Image
                      src={release.image}
                      alt={release.title}
                      width="821"
                      height="432"
                      className="border-slate-6 col-span-2 w-full rounded-md border object-cover lg:rounded-lg"
                    />

                    <div className="flex flex-col">
                      <h2 className="font-book font-styling font-display text-slate-12 line-clamp-5 text-[2.25rem] leading-[130%] leading-normal tracking-tight">
                        {release.title}
                      </h2>
                      <span className="sans text-slate-11 mb-4 text-base font-normal md:text-[1.125rem] md:leading-[1.5]">
                        {release.lead}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
