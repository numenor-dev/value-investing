'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { motion, Variants } from 'motion/react';

export default function Begin() {

  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const dotVariants: Variants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center gap-x-4"
        animate="pulse"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      >
        <motion.div className="w-4 h-4 rounded-3xl bg-blue-700 will-change-transform" variants={dotVariants} />
        <motion.div className="w-4 h-4 rounded-3xl bg-blue-700 will-change-transform" variants={dotVariants} />
        <motion.div className="w-4 h-4 rounded-3xl bg-blue-700 will-change-transform" variants={dotVariants} />
      </motion.div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <button
        className="rounded-xl bg-blue-600 px-6 py-3 font-mono text-xl text-white hover:bg-blue-700 cursor-pointer"
        type="button"
        onClick={() => router.push("/question-one")}
      >
        Begin
      </button>
    </div>
  );
}
