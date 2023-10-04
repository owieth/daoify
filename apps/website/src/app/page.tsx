'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'ui/components/ui/accordion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';
import { Card } from '../components/card/card';
import Cobe from '../components/cobe/cobe';
import Features from '../components/features/features';
import Feedbacks from '../components/feedbacks/feedbacks';
import Section from '../components/section/section';
import Separator from '../components/separator/separator';
import Stars from '../components/stars/stars';
import Teaser from '../components/teaser/teaser';
import H2 from '../components/text/h2';

const styles = {
  main: ['flex', 'flex-col', 'items-center', 'min-h-screen'].join(' '),
};

const qa = [
  { question: 'Why should I incorporate in Switzerland?', answer: '' },
  { question: 'How long does it take to setup the Legal Wrapper?', answer: '' },
  { question: 'What is a DAO Legal Wrapper?', answer: '' },
  { question: 'Can I customized my legal Wrapper Smart Contract?', answer: '' },
  { question: 'Can DAOify alternate my contract’s details?', answer: '' },
  { question: 'How does DAOify`s KYC Processing work?', answer: '' },
  { question: 'Which payment methods are supported?', answer: '' },
];

const FadeInContent = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -20 },
      }}
      transition={{
        delay,
        duration: 0.25,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className={styles.main} id="home">
      <Stars />

      <div className="pt-48">
        <FadeInContent>
          <Teaser />
        </FadeInContent>
      </div>

      <Section small>
        <FadeInContent delay={0.2}>
          <h1 className="text-md font-bold md:text-lg">Latest Legal Wrapper</h1>
        </FadeInContent>
        <FadeInContent delay={0.4}>
          <div className="flex justify-center">
            <span className="text-sm md:text-base">
              Your one-stop shop for your swiss dao legal wrapper setup.
            </span>
          </div>
        </FadeInContent>
      </Section>

      <Section small>
        <div className="relative md:px-8 lg:px-16">
          <FadeInContent delay={0.6}>
            <Image src={'/dashboard.svg'} alt="" height={800} width={1600} />
          </FadeInContent>
        </div>
      </Section>

      <Section id="about" small>
        <Separator />

        <span className="mt-20 text-center text-base">About</span>
        <H2>Cutting-edge features for DAOs</H2>

        <span className="w-2/4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>

        <FadeInContent delay={0.2}>
          <div className="my-20">
            <Features />
          </div>
        </FadeInContent>
      </Section>

      <Section id="process" small>
        <Separator />

        <span className="mt-20 text-center text-base">Process</span>
        <H2>Cutting-edge features for DAOs</H2>

        <div className="mt-20 flex w-full max-w-3xl flex-col">
          <FadeInContent delay={0.2}>
            <Card shiny>
              <span className="font-bold">Create your DAO</span>
              <span className="text-center text-sm">Lorem Ipsum</span>
            </Card>

            <div className="flex flex-col items-center ">
              <div className="relative h-[100px] w-px overflow-hidden bg-gradient-to-b from-white/0 from-0% via-white/30 via-50% to-white/0 to-100%">
                <span className="mask-gradient animate-dripping absolute inset-0 h-[30px] w-[100%] overflow-hidden rounded-full bg-gradient-to-b from-white/10 to-white/100" />
              </div>
            </div>
          </FadeInContent>

          <FadeInContent delay={0.4}>
            <Card shiny>
              <span className="font-bold">Wrap your DAO</span>
              <span className="text-center text-sm">Lorem Ipsum</span>
            </Card>

            <div className="flex flex-col items-center ">
              <div className="relative h-[100px] w-px overflow-hidden bg-gradient-to-b from-white/0 from-0% via-white/30 via-50% to-white/0 to-100%">
                <span className="mask-gradient animate-dripping absolute inset-0 h-[30px] w-[100%] overflow-hidden rounded-full bg-gradient-to-b from-white/10 to-white/100 delay-1000" />
              </div>
            </div>
          </FadeInContent>

          <FadeInContent delay={0.6}>
            <Card shiny>
              <span className="font-bold">Operate your DAO</span>
              <span className="text-center text-sm">Lorem Ipsum</span>
            </Card>
          </FadeInContent>
        </div>
      </Section>

      {/* <Section className="hidden md:flex">
          <H2>Always at your command</H2>
          <span className="text-center text-base"></span>

          <div className="border-line relative flex h-full w-full flex-col items-center overflow-hidden rounded-xl border p-4 lg:p-6">
            <Keyboard />
          </div>
        </Section> */}

      <Section noPadding>
        <div className="relative flex w-full justify-center overflow-hidden">
          <div className="absolute bottom-0 top-0 z-10 flex items-center justify-center">
            <div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[200px] before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[200px] after:bg-[linear-gradient(to_left,black_0%,rgba(255,255,255,0)_100%)] after:content-['']">
              <div className="animate-infinite-slider flex w-full">
                <FadeInContent delay={0.4}>
                  <Feedbacks />
                </FadeInContent>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 z-[2] h-full w-full bg-gradient-to-t from-black via-black via-35% to-transparent" />

          <FadeInContent delay={0.2}>
            <Cobe />
          </FadeInContent>
        </div>
      </Section>

      <Section small>
        <Separator />

        <H2 className="my-20">Frequently Asked Questions</H2>

        <Accordion
          type="single"
          collapsible
          className="grid w-full max-w-3xl gap-6"
        >
          {qa.map(({ question, answer }, i) => (
            <AccordionItem key={i} value={`item-${i}`} asChild>
              <FadeInContent delay={(i * 2) / 10}>
                <Card nested>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </Card>
              </FadeInContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* <Section>
          <Analytics />
        </Section> */}

      <Section noPadding>
        <div className="relative min-h-[60rem] w-full">
          <FadeInContent delay={0.2}>
            <div className="absolute left-0 right-0 top-0 flex w-full justify-center overflow-hidden">
              <div className="aspect-square max-h-[60rem] min-w-[60rem] overflow-hidden rounded-full bg-gradient-to-b from-white from-0% via-white/30 via-[2%] to-white/0 to-25% p-px">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
                  <div className="mx-auto h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
                </div>
              </div>
            </div>
          </FadeInContent>

          <div className="relative z-10 mt-48 flex flex-col items-center gap-12 text-center">
            <div>
              <FadeInContent delay={0.4}>
                <h1 className="text-md font-bold md:text-lg">
                  Building next-generation <br /> companies.
                </h1>
              </FadeInContent>
            </div>

            <div className="relative h-[300px] w-[300px]">
              <FadeInContent delay={0.8}>
                <Image src={'appIcon.svg'} alt="" fill />
              </FadeInContent>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
