'use client';

import { motion } from 'motion/react';
import type { Company } from '@/store/questiondata';
import ButtonArrow from '../components/buttonarrow';

type CompanyInfoProps = {
    relatedCompanies: Company[];
}

export default function CompanyCards({ relatedCompanies }: CompanyInfoProps) {
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

    const multipleCompanies = relatedCompanies.length > 1;

    return (
        <div className="xl:max-w-7xl lg:max-w-5xl mx-auto pt-20 px-4">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 place-item-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {relatedCompanies.map((c, index) => (
                    <motion.button
                        key={c.name}
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        onClick={() => window.open(c.website, '_blank')}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                        }}
                        className="bg-slate-100 rounded-lg shadow-md px-8 py-6 cursor-pointer transition-shadow"
                    >
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">{c.name}</h3>
                        <p className="text-md font-mono text-blue-600 font-semibold mb-3">Stock symbol:{c.ticker}</p>
                        <p className="text-md font-mono text-blue-600 font-semibold mb-3">Website: {c.website}</p>
                        {c.description && (
                            <p className="text-stone-900 font-noto text-lg leading-relaxed">{c.description}</p>
                        )}
                    </motion.button>
                ))}
            </motion.div>

            <span className="text-2xl text-slate-200 mt-10 leading-10">
                {`Based on your answers, ${multipleCompanies ? 'these companies' : 'this company'}
                might be worth exploring further regarding passion investing or value investing
                ...or both! As a reminder, this is not financial advice. Remember to conduct your own research
                before making any investment decisions. Just a friendly slice of advice from
                P.I.E.`}
            </span>

            <ButtonArrow
                direction="back"
                href="/value-inv"
                className="mt-20 pb-20 mx-auto"
            />
        </div>
    )
}