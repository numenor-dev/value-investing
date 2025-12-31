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
            flex min-h-screen flex-col items-center 
            justify-center font-sans space-y-6 p-4
            "
            onSubmit={handleSubmit}
        >
            <h2 className="text-5xl font-bold">
                What hobbies are you passionate about?
            </h2>
            <label className="flex flex-col items-start space-y-2">
                <input
                    name="hobbies"
                    type="text"
                    className="
                    rounded-md bg-slate-200 w-[70em] h-16 text-center
                    text-md text-slate-900 font-sans focus:border-2
                    focus:outline-none
                    "
                    id="hobbies"
                    required={true}
                    placeholder="Surfing, hiking, gaming, etc."
                />
            </label>
            <div className="flex flex-row-reverse mx-auto gap-x-96">
                <ButtonArrow
                    type="submit"
                    direction="next"
                    href="/question-one"
                    className="mt-16 w-20"
                />
                <ButtonArrow
                    direction="back"
                    href="/question-one"
                    className="mt-16 w-20"
                />
            </div>
        </form>
    );
}