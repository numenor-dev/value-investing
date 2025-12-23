'use client';

import { useRouter } from 'next/navigation';
import { useQuestionStore } from '@/store/questiondata';

export default function QuestionTwo() {

    const router = useRouter();

    const setAnswer = useQuestionStore((state) => state.setAnswer);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const input = formData.get('interests') as string;


        const interests = input
            .split(',')
            .map((i) => i.trim())
            .filter(Boolean);

        if (interests.length === 0) {
            alert('Please add at least one hobby!');
            return;
        }

        setAnswer('interests', interests);
        console.log(interests);
        router.push('/question-two');

    }

    return (
        <form
            className="
            flex min-h-screen flex-col items-center 
            justify-center bg-zinc-100 font-sans space-y-6 p-4
            "
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-bold text-zinc-800">From the hobby or hobbies you mentioned,
                which of these areas interest you?
            </h2>
            <label className="flex flex-col items-start space-y-2">
                <input
                    name="hobbies"
                    type="text"
                    className="
                    rounded-md border border-zinc-300 w-[50em] 
                    h-20 text-center text-md font-sans focus:border-blue-500 
                    focus:outline-none
                    "
                    id="hobbies"
                    required={true}
                    placeholder="Add hobbies here!"
                />
            </label>
            <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 font-mono text-xl text-white hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    );
}