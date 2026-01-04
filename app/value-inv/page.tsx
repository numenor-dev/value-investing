'use client';

import { motion } from 'motion/react';
import ButtonArrow from '../components/buttonarrow';

export default function ValueInvesting() {

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
                What is Value Investing?
            </motion.h1>
            <motion.span
                className="xl:max-w-7xl lg:max-w-5xl md:text-justify
                  text-3xl mt-10 md:mx-auto mx-4 text-center leading-10"
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
            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-64 mb-20">
                <ButtonArrow
                    direction="next"
                    href="/question-one"
                    className="mt-20"
                />

                <ButtonArrow
                    direction="back"
                    href="/passion-inv"
                    className="mt-20"
                />
            </div>
        </div>
    )
}