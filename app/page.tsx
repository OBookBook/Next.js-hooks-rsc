"use client";

import { useActionState } from "react";
import { formAction, increment } from "./actions";
import IncrementBtn from "./IncrementBtn";

export default function Home() {
  const [state, formDispatch] = useActionState(increment, 0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formDispatch}>
        <IncrementBtn />
      </form>
      <span>Count{state}</span>
    </main>
  );
}
