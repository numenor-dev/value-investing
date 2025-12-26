'use client';

import { useState } from 'react';
import { useQuestionStore } from '@/store/questiondata';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

type SubCardsProps = {
    refHobbies: Record<string, string[]>
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
    const allOptions: { hobby: string; option: string; index: number }[] = [];

    Object.entries(refHobbies).forEach(([hobby, options]) => {
        options.forEach(option => {
            allOptions.push({ hobby, option, index: optionIndex++ });
        });
    });

    const flipVariants = {
        hidden: { rotateY: -90, opacity: 0 },
        visible: { rotateY: 0, opacity: 1 }
    };

    return (
        <div className="xl:max-w-7xl lg:max-w-5xl mx-auto mt-20 px-4">
            <h1 className="font-sans font-bold text-4xl mb-12">
                Which of these areas interest you the most? Choose as many as you like.
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {allOptions.map(({ option, index }) => (
                    <motion.button
                        key={option}
                        variants={flipVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}
                        onClick={() => toggleSelect(option)}
                        className={`p-4 rounded-lg font-sans text-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${selected.includes(option)
                                ? 'bg-blue-600 text-white scale-105'
                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                    >
                        {option}
                    </motion.button>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="block mx-auto rounded-xl bg-blue-600 px-8 py-3 font-mono text-xl text-white hover:bg-blue-500 transition-colors duration-200 cursor-pointer"
            >
                Continue
            </button>
        </div>
    );
}