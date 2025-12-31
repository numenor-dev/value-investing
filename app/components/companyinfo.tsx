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
        <div className="xl:max-w-7xl lg:max-w-5xl mx-auto pt-20 px-4">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
                            scale: 1.03,
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                        }}
                        className="bg-slate-100 rounded-lg shadow-md px-8 py-6 cursor-pointer transition-shadow"
                    >
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">{c.name}</h3>
                        <p className="text-md font-mono text-blue-600 font-semibold mb-3">Stock symbol:{c.ticker}</p>
                        {c.description && (
                            <p className="text-stone-900 font-noto text-lg leading-relaxed">{c.description}</p>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}