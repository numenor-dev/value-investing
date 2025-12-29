'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

export default function PassionInvesting() {
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
                duration: 1.5,
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                easing: 'easeIn'
            }
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
                What is Passion Investing?
            </motion.h1>
            <motion.span
                className="font-sans text-3xl mt-10 xl:max-w-7xl lg:max-w-5xl mx-auto"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={1}
            >
                Passion Investing is an investment strategy that
                focuses on investing in companies, industries, or
                sectors that align with an individual&apos;s personal
                interests, values, or passions. The idea is that by
                investing in areas one is passionate about, investors
                may be more engaged and motivated to stay informed about
                their investments, potentially leading to better
                decision-making and long-term commitment.
            </motion.span>
            <motion.button
                className="rounded-xl mx-auto bg-slate-950 px-6 py-3 font-mono text-2xl text-white cursor-pointer mt-24 ease-in-out shadow-xl"
                type="button"
                onClick={() => router.push("/value-inv")}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
            >
                Continue
            </motion.button>
        </div>
    )
}