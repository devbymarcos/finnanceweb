"use client";
import { useFormStatus } from "react-dom";

const Submit = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <button className="bg-base-yellow px-2 py-3 font-bold  w-full rounded-sm">
      {pending ? "Processando..." : text}
    </button>
  );
};

export default Submit;
