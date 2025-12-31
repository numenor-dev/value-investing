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
    <div className="lg:max-w-7xl max-w-xl flex flex-col mx-auto pt-28 font-sans">
      <motion.h1
        className="font-noto font-bold text-7xl mx-auto"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Welcome to P.I.E.
      </motion.h1>

      <motion.h1
        className="font-noto font-bold text-6xl mt-10 mx-auto"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Your Personalized Investment Engine
      </motion.h1>

      <motion.span
        className="font-noto text-3xl mt-16 mx-auto"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        PIE is a tool to learn about passion and value investing.
        It will not buy stocks nor provide financial advice, but it will teach you about passion
        and value investing as well provide stock suggestions based upon your lifestyle!
      </motion.span>
      <div className="mx-auto">
        <Button
        href="/passion-inv"
        className="mt-24">
          Begin
        </Button>
      </div>
    </div>
  );
}