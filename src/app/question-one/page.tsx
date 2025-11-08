export default function QuestionOne() {
    return (
        <form className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 font-sans space-y-6 p-4">
            <h1 className="text-3xl font-bold text-zinc-800">Please list your favorite hobby</h1>
            <label className="flex flex-col items-start space-y-2">
                <input
                    type="text"
                    className="w-64 rounded-md border border-zinc-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder="Type your answer here"
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