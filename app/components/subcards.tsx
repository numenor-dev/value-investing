'use client';

import { useState } from 'react';
import { useQuestionStore } from '@/store/questiondata';
import type { RefinedHobbies } from '@/store/questiondata';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import ButtonArrow from './buttonarrow';

type SubCardsProps = {
    refHobbies: RefinedHobbies;
}

export default function SubCards({ refHobbies }: SubCardsProps) {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]);
    const { setSelectedRefinedHobbies } = useQuestionStore();

    const handleSubmit = () => {
        setSelectedRefinedHobbies(selected);
        router.push('/question-three');
    };

    const toggleSelect = (option: string) => {
        if (selected.includes(option)) {
            setSelected(selected.filter(s => s !== option));
        } else {
            setSelected([...selected, option]);
        }
    };

    let optionIndex = 0;
    const allOptions: { hobby: string; option: string; index: number; row: number; col: number }[] = [];

    const cols = 3;
    Object.entries(refHobbies).forEach(([hobby, options]) => {
        options.forEach(option => {
            const row = Math.floor(optionIndex / cols);
            const col = optionIndex % cols;
            allOptions.push({ hobby, option, index: optionIndex, row, col });
            optionIndex++;
        });
    });

    const flipVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    // Controls opacity gradient
    const getDelay = (row: number, col: number) => {
        return (row + col) * 0.12;
    };

    return (
        <div className="xl:max-w-7xl lg:max-w-5xl flex flex-col mx-auto pt-24 px-4">
            <h2 className="text-center font-sans font-bold text-5xl mb-12">
                Which of these areas interest you the most?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mb-12" style={{ perspective: '1000px' }}>
                {allOptions.map(({ option, row, col }) => (
                    <motion.button
                        key={option}
                        variants={flipVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.7,
                            delay: getDelay(row, col),
                            ease: "easeOut"
                        }}
                        onClick={() => toggleSelect(option)}
                        className={`p-4 rounded-lg font-sans text-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${selected.includes(option)
                            ? 'bg-green-700 text-white scale-105'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {option}
                    </motion.button>
                ))}
            </div>
            <div className="flex flex-row-reverse mx-auto gap-x-96">
                <ButtonArrow
                    onClick={handleSubmit}
                    direction="next"
                    href="/question-three"
                    className="mt-20 w-20"
                />
                <ButtonArrow
                    direction="back"
                    href="/question-one"
                    className="mt-20 w-20"
                />
            </div>
        </div>
    );
}