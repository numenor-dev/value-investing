'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'motion/react';

type ButtonArrowProps = {
    type?: 'submit' | 'reset';
    direction: 'next' | 'back';
    href?: string;
    onClick?: () => void;
    className?: string;
};

export default function ButtonArrow({
    direction,
    href,
    onClick,
    className = '',
}: ButtonArrowProps) {
    const router = useRouter();
    const pathname = usePathname();
    const isQuestionOne = pathname === '/question-one';

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (href) {
            router.push(href);
        }
    };

    const arrowVariants = {
        hidden: { opacity: 0, y: isQuestionOne ? 0 : 40},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
        hover: {
            x: direction === 'next' ? 5 : -5,
            transition: {
                yoyo: Infinity, duration: 0.3
            }
        },
    };

    return (
        <motion.button
            className={`cursor-pointer flex ${className}`}
            onClick={handleClick}
        >
            {direction === 'next' ? (
                <>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8 h-12 w-16"
                        variants={arrowVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3 }}
                        whileHover="hover"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </motion.svg>
                </>
            ) : (
                <>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8 h-12 w-16"
                        variants={arrowVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3 }}
                        whileHover="hover"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                        />
                    </motion.svg>
                </>
            )}
        </motion.button>
    );
}