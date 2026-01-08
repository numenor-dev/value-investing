'use client';

import { validateHobbies } from '@/app/actions/validation';
import { useRouter } from 'next/navigation';
import { useQuestionStore } from '@/store/questiondata';
import toast from 'react-hot-toast';
import ButtonArrow from '../components/buttonarrow';

export default function QuestionOne() {
    const router = useRouter();
    const { setHobbies } = useQuestionStore();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, direction: string) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const result = await validateHobbies(formData);

        if (!result.success && direction === "next") {
            toast.error(result.error || 'An unexpected error occurred. Please try again.');
            return;
        }

        if (direction === "back") {
            router.push('/passion-inv');
            return;
        }

        const hobbies = result.hobbies as string[];
        setHobbies(hobbies);
        router.push('/question-two');
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e, "next")}
            className="flex flex-col md:pt-32 pt-24 items-center
            justify-center
            "
        >
            <h1 className="text-5xl font-bold text-center mb-12">
                What hobbies are you passionate about?
            </h1>
            <label className="flex flex-col items-start space-y-2">
                <input
                    name="hobbies"
                    type="text"
                    className="
                    rounded-md bg-slate-200 lg:w-[65em] md:w-[35em] w-[25em] md:h-10 h-16 text-center
                    text-md text-slate-900 focus:border-2
                    focus:outline-none
                    "
                    id="hobbies"
                    formNoValidate
                    placeholder="Surfing, hiking, gaming, etc."
                />
            </label>
            <div className="flex flex-row-reverse mx-auto md:gap-x-96 gap-x-52">
                <ButtonArrow
                    type="submit"
                    direction="next"
                    className="mt-20"
                />

                <ButtonArrow
                    type="button"
                    direction="back"
                    href="/passion-inv"
                    className="mt-20"
                />
            </div>
        </form>
    );
}