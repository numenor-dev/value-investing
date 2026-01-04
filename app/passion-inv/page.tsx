'use client';

import { motion } from 'motion/react';
import ButtonArrow from '../components/buttonarrow';

export default function PassionInvesting() {

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
                What is Passion Investing?
            </motion.h1>
            <motion.span
                className="xl:max-w-7xl lg:max-w-5xl md:text-justify
                  text-3xl mt-10 md:mx-auto mx-4 text-center leading-10"
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
            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-64 mb-20">
                <ButtonArrow
                    direction="next"
                    href="/value-inv"
                    className="mt-20"
                />

                <ButtonArrow
                    direction="back"
                    href="/"
                    className="mt-20"
                />
            </div>
        </div>
    )
}