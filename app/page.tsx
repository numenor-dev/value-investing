'use client';

import { motion } from 'motion/react';
import Button from './components/button';

export default function Begin() {

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: index * 0.2
      }
    })
  };

  return (
    <div className="lg:max-w-7xl max-w-xl flex flex-col mx-auto md:pt-24 pt-16">
      <motion.h1
        className="font-bold text-7xl md:mx-auto mx-1 text-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Welcome to P.I.E.
      </motion.h1>

      <motion.h1
        className="font-bold text-6xl mt-10 md:mx-auto mx-1 text-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Your Personalized Investment Engine
      </motion.h1>

      <motion.span
        className="md:text-2xl text-3xl mt-16 md:mx-auto md:text-justify mx-4 text-center leading-10"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        PIE is a tool to learn about passion and value investing.
        It will not buy stocks nor provide financial advice, but it will teach you about passion
        and value investing while helping you find companies that align with your interests and values.
      </motion.span>
      <div className="mx-auto">
        <Button
          href="/passion-inv"
          className="
          group cursor-pointer font-mono px-8 py-2 rounded-full bg-blue-500 text-slate-100
          text-2xl mt-24 mb-32 shadow-xl
          "
        >
          Begin
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor"
            className="group-hover:translate-x-1 transition-transform
            duration-300 inline ml-1 size-6 w-6 h-6
          ">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}