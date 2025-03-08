"use client";

import Button from "@/components/ui/Button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div
      className={
        "fixed inset-0 flex flex-col items-center justify-center gap-5 p-5"
      }
    >
      <h2 className={"text-5xl font-bold"}>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
}
