'use client';

import { motion } from 'motion/react';
import type { Company } from '@/store/questiondata';

type CompanyInfoProps = {
    relatedCompanies: Company[];
}

export default function CompanyInfo({ relatedCompanies }: CompanyInfoProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.15
            }
        })
    };

    return (
        <div className="xl:max-w-7xl lg:max-w-5xl mx-auto mt-20 px-4">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {relatedCompanies.map((c, index) => (
                    <motion.div
                        key={c.name}
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                        }}
                        className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition-shadow"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{c.name}</h3>
                        <p className="text-sm font-mono text-blue-600 font-semibold mb-3">{c.ticker}</p>
                        {c.description && (
                            <p className="text-gray-700 text-sm leading-relaxed">{c.description}</p>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}