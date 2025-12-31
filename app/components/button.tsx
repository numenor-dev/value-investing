'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
};

export default function Button({
    children,
    href,
    onClick,
    className = '',
}: ButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (href) {
            router.push(href);
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.2,
                easing: 'easeIn'
            }
        }
    };

    return (
        <motion.button
            type="button"
            className={`px-5 py-3 font-sans text-2xl text-slate-100
            font-semibold cursor-pointer rounded-lg shadow-2xl bg-slate-950
            ${className}`}

            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            onClick={handleClick}
            whileHover="hover"
        >
            {/* Text content */}
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}