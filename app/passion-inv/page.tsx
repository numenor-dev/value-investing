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
                className="font-bold md:text-6xl text-7xl md:mx-auto mx-1 text-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                What is Passion Investing?
            </motion.h1>
            <motion.span
                className="xl:max-w-6xl lg:max-w-5xl md:text-justify
                  md:text-2xl text-3xl mt-10 md:mx-auto mx-4 text-center leading-10"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={1}
            >
                Passion investing focuses on investing in companies
                or industries that relate to your interests.
                The idea is that by investing in areas one
                is passionate about, investing may become more engaging
                and motivate you to stay informed about
                your investments, potentially leading to better decision
                making and long term commitment.
            </motion.span>
            <motion.span
                className="xl:max-w-6xl lg:max-w-5xl md:text-justify
                  md:text-2xl text-3xl mt-10 md:mx-auto mx-4 text-center leading-10"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={2}
            >
                For example, a person passionate about technology
                might choose to invest in tech startups. Similarly, 
                someone interested in sustainable living might focus
                on companies developing clean energy with strong
                environmental practices. Passion investing can extend
                to art, sports, collectibles, and more! The key is aligning
                investments with your interests to create a more
                rewarding investment experience.
            </motion.span>
            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-52 mb-32">
                <ButtonArrow
                    direction="next"
                    href="/question-one"
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