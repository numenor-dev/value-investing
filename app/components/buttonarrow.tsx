'use client';

import { useRouter } from 'next/navigation';
import { motion, spring } from 'motion/react';

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

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (href) {
            router.push(href);
        }
    };

    const arrowVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
        hover: {
            transition: {
                x: direction === 'next' ? 10 : -10,
                type: spring,
                damping: 10,
                stiffness: 300,
            },
        },
    };

    return (
        <motion.button
            className={`cursor-pointer flex ${className}`}
            onClick={handleClick}
            whileHover="hover"
        >
            <motion.svg
                width="50"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}
            >
                {direction === 'next' ? (
                    <>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </>
                ) : (
                    <>
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 5 5 12 12 19" />
                    </>
                )}
            </motion.svg>
        </motion.button>
    );
}