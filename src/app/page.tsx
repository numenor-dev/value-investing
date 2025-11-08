'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Begin() {

  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p className="font-sans text-2xl text-zinc-600">
          Loading
        </p>
        <p className="font-sans animate-ellipsis text-2xl text-zinc-600 duration-300">...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <button
        className="rounded-xl bg-blue-600 px-6 py-3 font-mono text-xl text-white hover:bg-blue-700"
        type="button"
        onClick={() => router.push("/question-one")}
      >
        Begin
      </button>
    </div>
  );
}
