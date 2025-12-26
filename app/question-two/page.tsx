'use client';

import { refineHobbies } from '../api/claude';
import { useQuestionStore } from '@/store/questiondata';
import SubCards from '../components/subcards';
import { useEffect, useState } from 'react';
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

    useEffect(() => {
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
    }, [hobbies, setRefinedHobbies]);

    if (loading) {
        return (
            <motion.div
                className="min-h-screen flex items-center justify-center gap-x-4"
                animate="pulse"
                transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            >
                <motion.div className="w-4 h-4 rounded-3xl bg-blue-700 will-change-transform" variants={dotVariants} />
                <motion.div className="w-4 h-4 rounded-3xl bg-blue-700 will-change-transform" variants={dotVariants} />
                <motion.div className="w-4 h-4 rounded-3xl bg-blue-700 will-change-transform" variants={dotVariants} />
            </motion.div>
        );
    }

    return (
        <SubCards refHobbies={refinedHobbies} />
    );
}