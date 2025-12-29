'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

export default function Begin() {
  const router = useRouter();

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

  const buttonVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="lg:max-w-7xl max-w-xl flex flex-col mx-auto pt-28 font-sans">
      <motion.h1
        className="font-sans font-bold text-7xl mx-auto"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Welcome to PIE.
      </motion.h1>

      <motion.h1
        className="font-sans font-bold text-6xl mt-10 mx-auto"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Your Personalized Investment Engine.
      </motion.h1>

      <motion.span
        className="font-sans text-3xl mt-16 mx-auto"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        PIE is a tool to learn about passion and value investing.
        It will not buy stocks nor provide financial advice. But it will teach you about passion
        and value investing as well provide stock suggestions based upon your lifestyle!
      </motion.span>

      <motion.button
        className="rounded-xl mx-auto bg-slate-900 px-6 py-3 font-mono text-xl text-white hover:bg-teal-950 cursor-pointer mt-24 transition duration-300 ease-in-out shadow-xl"
        type="button"
        onClick={() => router.push("/question-one")}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Begin
      </motion.button>
    </div>
  );
}