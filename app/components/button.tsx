'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

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

    const [isHovered, setIsHovered] = useState<boolean>(false);

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
            scale: 1.05
        }
    };

    return (
        <motion.button
            type="button"
            className={`${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            onClick={handleClick}
            whileHover="hover"
            whileTap="hover"
        >
            <motion.div
                className="absolute inset-0 bg-white -z-10"
                initial={{ scaleX: 0 }}
                animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ originX: 0 }}
            />

            <motion.span
                animate={isHovered ? { color: "#1a1a1a" } : { color: "#ffffff" }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
            >
                {children}
            </motion.span>
        </motion.button>
    );
}