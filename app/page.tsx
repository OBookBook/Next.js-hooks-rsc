"use client";

import { useFormStatus } from "react-dom";
import { formAction } from "./actions";

export default function Home() {
  const { pending } = useFormStatus();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formAction}>
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
          Increment
        </button>
        <p>{pending && "Now Loading..."}</p>
      </form>
    </main>
  );
}
