"use client";

import { formAction } from "./actions";
import IncrementBtn from "./IncrementBtn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formAction}>
        <IncrementBtn />
      </form>
    </main>
  );
}
