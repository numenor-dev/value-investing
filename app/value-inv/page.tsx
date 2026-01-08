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
                className="font-bold md:text-6xl text-7xl md:mx-auto mx-1 text-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                What is Value Investing?
            </motion.h1>
            <motion.span
                className="xl:max-w-6xl lg:max-w-5xl md:text-justify
                  md:text-2xl text-3xl mt-10 md:mx-auto mx-4 text-center leading-10"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={1}
            >
                Value investing involves researching stocks that appear
                to be trading for less than it&apos;s book value
                (total assets - total liabilities) or intrinsic value
                (the true value of a company based on its financials and
                growth potential). The stock market can overreact to news
                about a company, resulting in stock price movements that do 
                not follow a company&apos;s long term fundamentals.
            </motion.span>
            <motion.span
                className="xl:max-w-6xl lg:max-w-5xl md:text-justify
                  md:text-2xl text-3xl mt-10 md:mx-auto mx-4 text-center leading-10"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={2}
            >
                A classic example of a value investment is Berkshire Hathaway.
                Even though the company was struggling as a textile manufacturer
                in the 1960s, Warren Buffett saw that the stock was undervalued
                compared to it&apos;s assets on hand. By 1965, he owned 392,633 shares,
                enough to own a controlling stake in the company. Buffett then
                transformed Berkshire Hathaway into a holding company and invested
                in many other undervalued companies. In 1962, the stock price was
                $7.50 per share. Today, the stock price is over $700,000 per share.
                Granted, this is an extreme example, possibly the most extreme example
                of value investing success, but it illustrates the potential of
                value investing when done correctly.

            </motion.span>
            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-52 mb-32">
                <ButtonArrow
                    direction="next"
                    href="/company-info"
                    className="mt-20"
                />

                <ButtonArrow
                    direction="back"
                    href="/question-two"
                    className="mt-20"
                />
            </div>
        </div>
    )
}