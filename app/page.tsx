'use client';

import { useRouter } from 'next/navigation';

export default function Begin() {

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <button
        className="rounded-xl bg-blue-600 px-6 py-3 font-mono text-xl text-white hover:bg-blue-700 cursor-pointer"
        type="button"
        onClick={() => router.push("/question-one")}
      >
        Begin
      </button>
    </div>
  );
}
