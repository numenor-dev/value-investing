'use client';

import { useQuestionStore } from "@/store/questiondata";
import { findCompanies } from "../api/claude";
import { useEffect, useState, useRef } from 'react';
import { motion, Variants } from 'motion/react';
import CompanyCards from "../components/companycards";

export default function CompanyInformation() {

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
        selectedRefinedHobbies,
        setCompanies,
        companies
    } = useQuestionStore();

    const [loading, setLoading] = useState(false);
    const hasRunRef = useRef(false);

    useEffect(() => {
        if(hasRunRef.current) return;
        hasRunRef.current = true;

        const fetchCompanies = async () => {
            setLoading(true);
            try {
                const relatedCompanies = await findCompanies(selectedRefinedHobbies);
                setCompanies(relatedCompanies)
            } catch (error) {
                console.error('Failed to get companies', error)
            } finally {
                setLoading(false);
            }
        }

        fetchCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRefinedHobbies])

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
        <div>
            <CompanyCards relatedCompanies={companies} />
        </div>
    )
}