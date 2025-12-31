'use client';

import { refineHobbies } from '../api/claude';
import { useQuestionStore } from '@/store/questiondata';
import SubCards from '../components/subcards';
import { useEffect, useState, useRef } from 'react';
import { motion, Variants } from 'motion/react';

export default function QuestionTwo() {

    const dotVariants: Variants = {
        pulse: {
            scale: [1, 1.5, 1],
            transition: {
                duration: 1.3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        }
    };

    const {
        hobbies,
        refinedHobbies,
        setRefinedHobbies,
    } = useQuestionStore();

    const [loading, setLoading] = useState(false);
    const hasRunRef = useRef(false);

    useEffect(() => {
        if (hasRunRef.current) return;
        hasRunRef.current = true;

        const fetchRefinedHobbies = async () => {
            setLoading(true);
            try {
                const getRefined = await refineHobbies(hobbies);
                setRefinedHobbies(getRefined);
            } catch (error) {
                console.error('Failed to refine hobbies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRefinedHobbies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hobbies]);

    if (loading) {
        return (
            <motion.div
                className="min-h-screen flex items-center justify-center gap-x-4"
                animate="pulse"
                transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            >
                <motion.div className="w-4 h-4 rounded-3xl bg-slate-200 will-change-transform" variants={dotVariants} />
                <motion.div className="w-4 h-4 rounded-3xl bg-slate-200 will-change-transform" variants={dotVariants} />
                <motion.div className="w-4 h-4 rounded-3xl bg-slate-200 will-change-transform" variants={dotVariants} />
            </motion.div>
        );
    }

    return (
        <SubCards refHobbies={refinedHobbies} />
    );
}