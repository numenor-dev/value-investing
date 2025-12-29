'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

export default function ValueInvesting() {
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
                What is Value Investing?
            </motion.h1>
            <motion.span
                className="font-sans text-3xl mt-10 xl:max-w-7xl lg:max-w-5xl mx-auto"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={1}
            >
                Value Investing is an investment strategy that
                involves selecting stocks that appear to be trading
                for less than their intrinsic or book value. Value
                investors actively seek stocks they believe the
                market has undervalued. They believe the market
                overreacts to good and bad news, resulting in stock
                price movements that do not correspond with a
                company&apos;s long-term fundamentals. This strategy
                aims to capitalize on these market inefficiencies
                by purchasing undervalued stocks and holding them
                until their true value is recognized by the market.
            </motion.span>
            <motion.button
                className="rounded-xl mx-auto bg-slate-950 px-6 py-3 font-mono text-2xl text-white cursor-pointer mt-24 ease-in-out shadow-xl"
                type="button"
                onClick={() => router.push("/question-one")}
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