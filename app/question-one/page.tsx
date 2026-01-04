'use client';

import { useRouter } from 'next/navigation';
import { useQuestionStore } from '@/store/questiondata';
import ButtonArrow from '../components/buttonarrow';


export default function QuestionOne() {

    const router = useRouter();
    const { setHobbies } = useQuestionStore();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const input = formData.get('hobbies') as string;

        const hobbies = input
            .split(/,|\s+and\s+/i)
            .map((h) => h.trim())
            .filter(Boolean);

        if (hobbies.length === 0) {
            alert('Please add at least one hobby!');
            return;
        }

        setHobbies(hobbies);
        router.push('/question-two');
    }

    return (
        <form
            className="
            flex flex-col md:pt-32 pt-24 items-center 
            justify-center
            "
            onSubmit={handleSubmit}
        >
            <h1 className="text-5xl font-bold text-center mb-12">
                What hobbies are you passionate about?
            </h1>
            <label className="flex flex-col items-start space-y-2">
                <input
                    name="hobbies"
                    type="text"
                    className="
                    rounded-md bg-slate-200 lg:w-[65em] w-[25em] h-10 text-center
                    text-md text-slate-900   focus:border-2
                    focus:outline-none
                    "
                    id="hobbies"
                    required={true}
                    placeholder="Surfing, hiking, gaming, etc."
                />
            </label>
            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-64 mb-20">
                <ButtonArrow
                    type="submit"
                    direction="next"
                    className="mt-20"
                />

                <ButtonArrow
                    direction="back"
                    href="/value-inv"
                    className="mt-20"
                />
            </div>
        </form>
    );
}